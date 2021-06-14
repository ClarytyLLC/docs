<!-- markdownlint-disable -->

## Stream Ingestor 2

Stream Ingestor 2 is designed to transcode and reformat audio and video streams in preparation for playback in aiWARE applications and further analysis by cognitive engines.

## Goals

The primary objective is to create an engine that is decoupled from the application, but rather is dynamic and at runtime can be programmed to accomplish any ffmpeg task.

1. Runtime programmable and decoupled from the application
2. Chained together in the job DAG, to accomplish A/V tasks that would require a custom engine today
  - Combine an audio input source and a video input source into a single A/V video.  The best use case for this is audio translation.  In this case the DAG would look something like this:

                Input Video - \&gt; **Split A/V** -\&gt; Audio -\&gt; Transcription -\&gt; Translation -\&gt; Lex -\&gt;

                                           -\&gt; Video - - - - - - - - - - - - - - - - - - - - - -\&gt; **Combine A/V**

1. Parallel processing
  - Many tasks using FFMPEG can be executed in parallel, greatly improving performance.  An example of this is identifying faces in a video file, with a DAG that would look something like this:

Input Video File -&gt; Split File into 10MB Chunks -&gt;

[100] Split Chunks into JPEG / MP4 Video -&gt;

[100] Face Detect Engine -&gt;  FaceID





## Implementation

Stream Ingestor 2 is a wrapper engine around FFMPEG.   It is launched within a Docker container and communicates with aiWARE through the Engine Toolkit to both receive tasks and save output.   Unlike prior versions of Stream Ingesor, 2 receives the FFMPEG command line arguments as an input parameter associated with each task.

There will be the following versions of Stream Ingestor (SI):

- Playback Segment Creator
  - Engine ID: **352556c7-de07-4d55-b33f-74b1cf237f25**
  - Input: URL, Stream
  - Output: None
  - Creates and Stores HLS with Core

- Create Asset from Input
  - Engine Id: **75fc943b-b5b0-4fe1-bcb6-9a7e1884257a**
  - Input: URL, Stream, Chunk
  - Output: None (stream stored as asset in the TDO)
  - Payload Fields:
    - setAsPrimary: default true (first if chunk)
      - Only valid if assetType = media
    - assetType: &quot;media&quot;, &quot;transcript&quot; etc.

- Stream Ingestor 2 FFmpeg
  - Engine id: **8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440**
  - Input: URL, Stream, Chunk
  - Output:  ffmpeg chunks or stream results from running ffmpeg.
  - Payload Fields:
    -  **ffmpegTemplate** : Possible values:  audio, video, frame, custom
  -
    - **customFFMPEGTemplate** :  Supply full ffmpeg command line options with variables defined in Variables should be annotated with the mustache convention, for example  {{ chunkSizeInSeconds}}
    - **customFFMPEGProperties** : json array of name, value pairs for variable substitutions in customFFMPEGTemplate, e.g.

    { &quot;chunkSizeInSeconds&quot; : &quot;60&quot;,

      &quot;outputFileTemplate&quot; : &quot;output%08d.wav&quot;

    }



| **ffmpegTemplate** | **Predefined value** |
| --- | --- |
| audio | **-f segment -segment\_format**  **{{outputFormat}}**  **-segment\_time**  **{{chunkSizeInSeconds}}**  **-reset\_timestamps 1**  **-segment\_list audio.m3u8 s%08d.**** {{outputFormat}}** -------------------------With chunkSizeInSeconds = 5moutputFormat = wav This can be customized to have different chunkSizeInSeconds or outputFormat, for example: {  &quot;ffmpegTemplate&quot;: &quot;audio&quot;,  &quot;customFFMPEGProperties&quot;: {    &quot;outputFormat&quot;: &quot;mp3&quot;,    &quot;chunkSizeInSeconds&quot;: &quot;60&quot;  }}   |
| video | **-f segment -segment\_format**  **{{outputFormat}}**  **-segment\_time**  **{{chunkSizeInSeconds}}**  **-reset\_timestamps 1**  **-segment\_list video.m3u8 s%08d.**** {{outputFormat}}** -------------------------With chunkSizeInSeconds == 5moutputFormat = mp4 |
| frame | **-vf fps=**** {{framesPerSecond}} ****-----------------** WithframesPerSecond = 1 per secondThe outputFormat **=**  **jpg**  \*\* Note this can be customized to produce PNG frames with this payload , and extract 1 frame every 60 seconds  **{**   &quot;ffmpegTemplate&quot;: &quot;frame&quot;,  &quot;customFFMPEGProperties&quot;: {    &quot;outputFormat&quot;: &quot;png&quot;,    &quot;framesPerSecond&quot;: &quot;1/60&quot;  }}   |
| custom | User can give a ffmpeg command via customFFMPEG using keywords and supplied the keywords in a JSON array supplied as the ffmpegOptions to payload.  This option can be used to produce a single output file or multiple outputs, e.g. to create multiple chunks. For example:<br/><br/>1. To convert a media stream / chunk to mp4, simply have the payload as follows:<br/> {  &quot;ffmpegTemplate&quot;: &quot;custom&quot;,  &quot;customFFMPEGTemplate&quot;: &quot;-map 0 -f **{{outputFormat}}**&quot;,  &quot;customFFMPEGProperties&quot;: {    &quot;outputFormat&quot;: &quot;mp3&quot;  }}<br/><br/>2. To produce segments of avi chunks from an avi file:<br/> {  &quot;ffmpegTemplate&quot;: &quot;custom&quot;,  &quot;customFFMPEGTemplate&quot;: &quot;-map 0 -c copy -f segment -segment\_format avi -segment\_time 300 -reset\_timestamps 1 -segment\_list **{{segmentListFile}}** s%08d.avi&quot;,  &quot;customFFMPEGProperties&quot;: {    &quot;segmentListFile&quot;: &quot;aviseg.m3u8&quot;  }}    **Note that producing segments require the** {{segmentListFile}} **be included in the customFFMPEGTemplate.** |

