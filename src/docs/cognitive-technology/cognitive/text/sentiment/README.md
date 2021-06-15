# Building a Sentiment Analysis Engine

[badge/API/Partial/yellow]
[badge/Search/No/red]
[badge/UI/No/red]

A sentiment analysis engine classifies text according to sentiment or emotion, which may be a score representing negative, positive, or neutral sentiment, or could include a wider breadth of tags (such as "happy" or "excited").

## Engine Manifest

All sentiment analysis engines should specify the following parameters in their build manifest:

| Parameter | Value |
| --------- | ----- |
| `preferredInputFormat` | `"text/plain"` |
| `supportedInputFormats` | `["text/plain"]` |
| `engineMode` | `"chunk"` |

Here is a minimal example `manifest.json` that could apply to an sentiment analysis engine:

[](manifest.example.json ':include :type=code json')

See the full documentation for [engine manifest standards](/developer/engines/standards/engine-manifest/) for more details.

## Engine Input

Sentiment analysis engines can specify `supportedInputFormats` in their [manifest](/developer/engines/standards/engine-manifest/) for mime types they can support natively (e.g. `text/plain`, `application/pdf`).
In this case, engines are given the entire file as their input and are responsible for outputting the sentiment analysis results for the entire file in their `vtn-standard` output.

> In the future, sentiment analysis engines will also be able to accept `vtn-standard` [text extraction output](/developer/engines/cognitive/text/text-extraction/?id=engine-output) as their input, opening up processing to any file types supported by text extraction engines.

## Engine Output

Sentiment analysis engine output can express multiple values depending on the format of the data being analyzed 
as well as the depth and detail of the insights the engine is able to express.

> The official `sentiment` validation contract json-schema is available
[here](/schemas/vtn-standard/sentiment/sentiment.json ':ignore').

Positive values express the strength of a positive sentiment from 0.0 (neutral: "I woke up") to 1.0 
(extreme: "The joy of waking up is the most supremely happy feeling!"),
and the positive confidence is the confidence that the positive value is accurate. Lower confidences could indicate uncertainty or sarcasm
("I'm so ... happy to be awake.") or indeterminate interpretation. ("That sandwich was sick!")

Similarly, negative values express the strength of the negative sentiment from 0.0 (neutral: "I ate dinner") to 1.0 
(extreme: "I ate the most foul, disgusting slop that was ever unfortunate enough to touch a plate"), and the negative
confidence is confidence that the negative value is accurate.

Text can also have mixed sentiment like "Although the Daytona hotel was the best I'd stayed at, it still had a lot of problems and I wouldn't recommend it."
or "Though his prowess exceeded that of any other man, sadly he was defeated in the end." This may be indicated by both positive and negative
values being present. When both values are present, their values are independent of one another. (That is, they don't have to add up to 1.0.) 
A positive value of 0.6 with a negative value of 0.1 simply means that the document or phrase was significantly positive with
a slight negative tone (like "Even though I didn't want to, I found myself thoroughly enjoying the experience.") and a positive value of 0.1 with
a negative value of 0.6 means that the document or phrase was significantly negative with a slight positive tone (like "Everything about
the experience was poor, except for one enjoyable moment.")

You must provide at least one value, whether it be positive or negative, and missing values are assumed to be 0.0 (neutral). 
Confidences are always optional, and are assumed to be 1.0 if not specified. 

### Example 1: Simple Output

The simplest possible sentiment output involves reporting a single positive or negative sentiment value for the entire document.
A positive analysis would be reported like this:

[](../../../../../../schemas/vtn-standard/sentiment/examples/simple.json ':include :type=code json')

And a negative analysis would would be reported like this:

[](../../../../../../schemas/vtn-standard/sentiment/examples/simple-negative.json ':include :type=code json')

### Example 2: Richer Output

If you need to report more complex sentiment or emotions, additional fields are available.

- `sentiment` is used for a general positive/negative emotion.
It can have both positive and negative values, as well as separate confidences for each.
- `emotions` can express as many different emotions as you'd like, each with their own values and confidences.
The value of the `emotion` field can include any descriptor you'd like.

> Although this example shows it and we do support it, we do not expect most engines to output both sentiment and emotions.
Most would choose one output format or the other.

[](../../../../../../schemas/vtn-standard/sentiment/examples/with-emotions.json ':include :type=code json')

> While we don't have any current engine providers expressing emotions as emoji (like 🤯), it is technically supported as valid utf-8 characters,
and its use above does exemplify the fact that these emotion codes do not need to conform to an aiWARE-managed list and can be anything the engine developer wishes.

### Example 3: Per-Phrase Reporting

Both `sentiment` and `emotions` can be reported at a per-phrase resolution by putting them within a `text` object
and optionally referencing the page, paragraph, and/or sentence index where they occur.

[](../../../../../../schemas/vtn-standard/sentiment/examples/per-phrase.json ':include :type=code json')

### Example 4: Polarized

A common output of standalone "sentiment analysis" engines is to report a single sentiment value of 
"positive," "negative," or "neutral" along with a single confidence value.
In vtn-standard format, those can be expressed by mapping the polarization score to the appropriate value.

#### Example with error range
If the sentiment analysis reports a 56% ±3% positive score, then the positive value is 0.56 and the uncertainty is the ratio
of the error value to the score: `0.03/0.56 = 0.0535714`. Then subtract this from 1.0 to convert the "uncertanty" to a "confidence"

[](../../../../../../schemas/vtn-standard/sentiment/examples/polarized.positive.json ':include :type=code json')

#### Example from a single-value scale

If the sentiment analysis reports the sentiment as a single value in a range, say from -1.0 (negative) to 1.0 (positive), then 
divide the range into two portions and map to the appropriate positive or negative value.

For example, if the engine reports on a scale of 0.0 (negative) to 1.0 (positive) with 0.5 being neutral, and the output is 0.46
then the `positiveValue` is 0.0 (or just left undefined) and the `negativeValue` is calculated as follows:
- Invert the strength from high meaning neutral 0.5 -> 0.0 to low meaning neutral 0.0 -> 0.5: `0.5 - 0.46 = 0.04`
- Change the scale from 0.0 -> 0.5 to 0.0 -> 1.0: `0.04 * 2 = 0.08`


[](../../../../../../schemas/vtn-standard/sentiment/examples/polarized.negative.json ':include :type=code json')

#### Example of a neutral value

If the sentiment analysis simply reports "neutral sentiment" then set both positive and negative values to 0.0

[](../../../../../../schemas/vtn-standard/sentiment/examples/polarized.neutral.json ':include :type=code json')

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>