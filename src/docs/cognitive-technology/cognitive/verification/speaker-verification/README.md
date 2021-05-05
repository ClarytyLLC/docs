# Building a Speaker Verification Engine

[badge/API/Yes/green]
[badge/Search/Yes/green]
[badge/UI/Yes/green]

Speaker verification engines can analyze human voices in media assets, and score them as to similarity with the voices(s) of a specified user identity.

## Engine Manifest

<!-- TODO

All speaker verification engines should specify the following parameters in their build manifest:

| Parameter | Value |
| --------- | ----- |
| `TODO` | `TODO` |
| `TODO` | `TODO` |

Here is a minimal example `manifest.json` that could apply to a speaker verification engine:
-->

<!--TODO: Define [](manifest.example.json ':include :type=code json')-->

See the full documentation for [engine manifest standards](/developer/engines/standards/engine-manifest/) for more details.

<!-- TODO ## Engine Input -->

<!-- TODO -->

### Training and Libraries

Training for the Speaker Verification Engine is done by using the `enroll` mode of the engine, specified when calling the engine. The hashed voiceprint of the trained identity is stored in the library, with the hash key stored in an additional database.

*Note*: The `verify` mode of the engine retrieves the hashed voiceprint from the library corresponding to the specified username, decrypts the voiceprint using the hash key, and compares the decrypted voiceprint to the voiceprint extracted from the input image.

## Engine Input

The speaker verification engine is an audio processing engine that performs [segment processing](/developer/engines/processing-modes/segment-processing/).

It accepts as input a custom binary file containing the following in the respective order:

    1. 8 bytes containing the number of bytes of a byte-encrypted json string
    2. A byte-encrypted JSON string
    3. 8 bytes containing the number of bytes of a binary audio file
    4. Binary audio file

An example of the byte-encrypted JSON string is as follows:

    {
        "mode": "verify",
        "username": "jsmith@veritone.com",
        "libraryId": "13e6f4a3-0d5c-4e11-9a30-913e981cb9ad",
        "dbUser": "postgres",
        "dbHost": "127.0.0.1",
        "dbDatabase": "postgresdb",
        "dbSchema": "public",
        "dbPort": 5432,
        "userPhrase": "hello world"
    }

Note: The userPhrase is for the engine's transcription functionality. It's the phrase that the audio needs to match.

[](../../_snippets/audio-engine-mime-type.md ':include')

## Engine Output

The speaker verification engine output should be stored as an `object` in the [vtn-standard](/developer/engines/standards/engine-output/).
The `type` of the object is `verification`. Each speaker maps back to a specified user identity which corresponds to an entity in a library;
hence the object includes the `entityId` along with the `libraryId`. The similarity score of the speaker's
audio to the audio sample(s) for the entity is the `confidence`.

The `mode` specifies whether the engine
is run in `enroll` or `verify` mode. An (optional) auxiliary object contains a score showing the degree of match
between the transcribed audio and the `userPhrase` in the input JSON object.

### Example

Here is an example of the simplest type of speaker verification engine output:

[](vtn-standard.example.json ':include :type=code json')
