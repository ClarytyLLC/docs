# Adapters

In aiWARE, an adapter is an engine that ingests data, usually by _pulling_ it from a public URL.

The first engine in any job's task list is usually an adapter. The two main adapters you'll use are the Webstream Adapter (WSA) and the Stream Ingestor v2 (SI2). The former outputs _stream_ data, while the latter outputs chunks (or "segments").

Below, we talk about common scenarios involving the various built-in adapters available in aiWARE, with GraphQL snippets, where applicable.

## Webstream Adapter V3F (WSA)

Real-time adapter for ingesting web streams from a URL.

<table data-number-column="false"><colgroup><col style="width: 159px;"><col style="width: 520px;"></colgroup><tbody><tr><td rowspan="1" colspan="1" data-colwidth="178"><p data-renderer-start-pos="1475">id</p></td><td rowspan="1" colspan="1" data-colwidth="581"><p data-renderer-start-pos="1481">9e611ad7-2d3b-48f6-a51b-0a1ba40fe255</p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="178"><p data-renderer-start-pos="1523">made</p></td><td rowspan="1" colspan="1" data-colwidth="581"><p data-renderer-start-pos="1531">Stream</p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="178"><p data-renderer-start-pos="1543">input type</p></td><td rowspan="1" colspan="1" data-colwidth="581"><p data-renderer-start-pos="1557">URL for any file</p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="178"><p data-renderer-start-pos="1579">I → O</p></td><td rowspan="1" colspan="1" data-colwidth="581"><p data-renderer-start-pos="1588">URL → */*</p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="178"><p data-renderer-start-pos="1603">fields</p></td><td rowspan="1" colspan="1" data-colwidth="581"><ul class="ak-ul"><li><p data-renderer-start-pos="1615">chunkSize</p></li></ul></td></tr></tbody></table>

The Webstream Adapter (WSA) is used to pull content from a URL into the job as a stream. This engine doesn’t do anything to the content but make it available to the next Task in the DAG.

If you are processing with a cognition engine that accepts streams, you can make it the direct child of the WSA. If you are processing with a cognition engine that accepts chunks, you will need to put a “SI2 audio/video Chunk creator” between the WSA stream output and the cognition chunk input.

If you have a URL and need a stream.

If you have a file that is more than a few megabytes, you should increase the `chunkSize` (for example: `chunkSize:1000000`), since otherwise the stream retrieval could be unnecessarily slow. 

> The default chunkSize is around 50KB. With a large (>1GB) file, the download can be five times faster with a 1MB chunk size than the default.

## SI2 Audio/Video Chunk Creator V3F

The SI2 adapter is used for splitting a stream (from a public URL) to audio, video, or images. Or it can be used for transferring a file. Even though the name of this engine contains “audio/video,” it’s really the Swiss army knife of the ingestion engines and is capable of taking virtually any input and producing any output.

<table data-number-column="false"><colgroup><col style="width: 102px;"><col style="width: 577px;"></colgroup><tbody><tr><td rowspan="1" colspan="1" data-colwidth="115"><p data-renderer-start-pos="2994">id</p></td><td rowspan="1" colspan="1" data-colwidth="645"><p data-renderer-start-pos="3000">8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440</p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="115"><p data-renderer-start-pos="3042">mode</p></td><td rowspan="1" colspan="1" data-colwidth="645"><p data-renderer-start-pos="3050">Stream</p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="115"><p data-renderer-start-pos="3062">input type</p></td><td rowspan="1" colspan="1" data-colwidth="645"><p data-renderer-start-pos="3076">any</p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="115"><p data-renderer-start-pos="3085">see also</p></td><td rowspan="1" colspan="1" data-colwidth="645"><p data-renderer-start-pos="3097"><a class="sc-eXEjpC bJcbJv" href="https://docs.veritone.com/#/overview/aiWARE-in-depth/stream-ingestor" title="https://docs.veritone.com/#/overview/aiWARE-in-depth/stream-ingestor" data-renderer-mark="true">Docs: Stream Ingester 2</a></p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="115"><p data-renderer-start-pos="3126">I → O</p></td><td rowspan="1" colspan="1" data-colwidth="645"><p data-renderer-start-pos="3135">Any Input can either be a URL or a stream<br>image/* stream → image/* chunk<br>video/* stream → image/jpeg chunk<br>video/* stream → audio/wav chunk<br>video/* stream → video/mp4 chunk<br>audio/* stream → audio/wav chunk<br>*/* stream → */* chunk</p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="115"><p data-renderer-start-pos="3369">fields</p></td><td rowspan="1" colspan="1" data-colwidth="645"><ul class="ak-ul"><li><p data-renderer-start-pos="3381">ffmpegTemplate</p></li><li><p data-renderer-start-pos="3399">customFFMPEGTemplate</p></li><li><p data-renderer-start-pos="3423">customFFMPEGProperties</p></li></ul></td></tr></tbody></table>

### If you have a URL for an image and need an image chunk

```pre
engineId: "8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440"
payload: {
  url: {{{UPLOAD_URL}}}
  ffmpegTemplate: "rawchunk"
}
```

This will just copy the file from the URL and produce as output a "chunk" that is the file. This will not change the type of the file (i.e. if the URL is for a TIFF, then the output will be a TIFF).


### If you have a URL for audio and need an audio chunk

Use the same `ffmpegTemplate: "rawchunk"` as above.


### If you have a URL for video and need a video chunk

Use the same `ffmpegTemplate: "rawchunk"` as above.


### If you have a URL for a video and need image chunks

```pre
engineId: "8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440"
payload: {
  url: {{{UPLOAD_URL}}}
  ffmpegTemplate: "frame"
  customFFMPEGProperties: { framesPerSecond: "1" }
}
```

This will take any video (that `ffmpeg` supports) and produce multiple image/jpeg files. 

The value of `framesPerSecond` is a fraction: “1” means one frame per second, “5” means five frames per second, and “1/5” means one frame every 5 seconds.

The output file type can be changed by supplying the desired type, like `customFFMPEGProperties: { outputFormat: "png" }`; however, that should rarely be necessary, as all downstream engines accept `image/jpeg` as input.

### If you have a URL for a video and need audio chunks

```pre
engineId: "8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440"
payload: {
  url: {{{UPLOAD_URL}}}
  ffmpegTemplate: "audio"
  customFFMPEGProperties: { chunkSizeInSeconds: "300" }
}
```

This will take any video (that `ffmpeg` supports) and produce multiple `audio/wav` files.

The produced files will have a duration specified by `chunkSizeInSeconds` if the video is longer than the specified chunk size. If the video is shorter than the chunk size, then only one file will be produced.

The output file type can be changed by supplying the type like customFFMPEGProperties: { outputFormat: "mp3" }, however this shouldn’t be necessary as all cognition engines (except one) accept `audio/wav` as input. The one exception is “Lip Voice Movement Correlation,” which only accepts `audio/webm`.

### If you have a URL for audio and need audio chunks

Same as “If you have a URL for a video and need audio chunks.”
    
### If you have a URL for video and need video chunks

```pre
engineId: "8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440"
payload: {
  url: {{{UPLOAD_URL}}}
  ffmpegTemplate: "video"
  customFFMPEGProperties: { chunkSizeInSeconds: "300" }
}
```

This will take any video (that ffmpeg supports) and produce multiple `video/mp4` files.

The produced files will have a duration specified by chunkSizeInSeconds if the video is longer than the specified chunk size. If the video is shorter than the chunk size, then only one file will be produced.

The output file type can be changed by supplying the desired type, like `customFFMPEGProperties: { outputFormat: "wmv" }`, however this shouldn’t be necessary as all cognition engines accept video/mp4 as input.

### Other Uses

This adapter is extremely powerful in that it is basically just a wrapper around `ffmpeg`, and by using `ffmpegTemplate: "custom"` you can provide any parameters to `ffmpeg` you want, and make it do almost anything.

For instance, to convert a media stream or chunk to mp3, you could use:

```pre
engineId: "8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440"
payload: {
  url: {{{UPLOAD_URL}}}
  ffmpegTemplate: "custom"
  customFFMPEGTemplate: "-map 0 -f {{outputFormat}}"
  customFFMPEGProperties: { "outputFormat": "mp3" }
}
```

See [SI2 dpcumentation(https://docs.veritone.com/#/overview/aiWARE-in-depth/stream-ingestor?id=implementation) for more information.

### If you have any stream and need a chunk

In all the above situations, there was a URL parameter in the payload. This ingester also works with a stream input instead of a URL. For instance, if you have a Webstream Adapter (WSA) pulling a stream from a URL, you can connect the output of the WSA to the input of the Stream Ingester 2 (SI2), and then use any of the snippets above. 

Example: If you have a WSA pulling a stream from a source video URL file, and you want to run both image and audio cognition on it, you can use two different SI2 engines connected to the output of the WSA, one with `ffmpegTemplate:"frame"` and the other with `ffmpegTemplate:"audio"`, but neither with a URL value.

## SI2 Playback Segment Creator V3F

Adapter used for creating playback segments (chunks) from an input stream into the TDO.

<table data-number-column="false"><colgroup><col style="width: 111px;"><col style="width: 568px;"></colgroup><tbody><tr><td rowspan="1" colspan="1" data-colwidth="124"><p data-renderer-start-pos="7797">id</p></td><td rowspan="1" colspan="1" data-colwidth="635"><p data-renderer-start-pos="7803">352556c7-de07-4d55-b33f-74b1cf237f25</p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="124"><p data-renderer-start-pos="7845">mode</p></td><td rowspan="1" colspan="1" data-colwidth="635"><p data-renderer-start-pos="7853">Stream</p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="124"><p data-renderer-start-pos="7865">input type</p></td><td rowspan="1" colspan="1" data-colwidth="635"><p data-renderer-start-pos="7879">any</p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="124"><p data-renderer-start-pos="7888">I → O</p></td><td rowspan="1" colspan="1" data-colwidth="635"><p data-renderer-start-pos="7897">&nbsp;</p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="124"><p data-renderer-start-pos="7903">fields</p></td><td rowspan="1" colspan="1" data-colwidth="635"><p data-renderer-start-pos="7913">none</p></td></tr></tbody></table>

### If you have a URL for a media file and want to attach it to a TDO as an asset

Create a Webstream Adapter task to download the URL as a stream, then send the stream to this engine. Like this:

```pre
  tasks: [
    {
      # Webstream Adapter
      engineId: "9e611ad7-2d3b-48f6-a51b-0a1ba40fe255"
      payload: { url: "{{{UPLOAD_URL}}}" }
      ioFolders: [
        { referenceId: "wsa-output", mode: stream, type: output }
      ]
    }
    {
      # Playback
      engineId: "352556c7-de07-4d55-b33f-74b1cf237f25"
      executionPreferences: { parentCompleteBeforeStarting: true }
      ioFolders: [
        { referenceId: "pb-input", mode: stream, type: input }
      ]
    }
  ]
  routes: [
    {
      parentIoFolderReferenceId: "wsa-output"
      childIoFolderReferenceId: "pb-input"
    }
```
    
If you want to create a brand new TDO and attach this stream as an asset to it, then use the target field of the createJob call to trigger the creation of a new TDO. If you want to attach the stream as an asset to an existing TDO, then use the targetId field of createJob.
    
If you are using `launchSingleEngineJob` instead, then provide the `uploadUrl` to create a new TDO and attach the stream to it.

## SI2 Stream Asset Creator V3F

This adapter is used for ingesting a stream and storing the data as an `asset` in the TDO.

<table data-number-column="false"><colgroup><col style="width: 108px;"><col style="width: 571px;"></colgroup><tbody><tr><td rowspan="1" colspan="1" data-colwidth="121"><p data-renderer-start-pos="9214">id</p></td><td rowspan="1" colspan="1" data-colwidth="638"><p data-renderer-start-pos="9220">75fc943b-b5b0-4fe1-bcb6-9a7e1884257a</p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="121"><p data-renderer-start-pos="9262">mode</p></td><td rowspan="1" colspan="1" data-colwidth="638"><p data-renderer-start-pos="9270">Stream</p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="121"><p data-renderer-start-pos="9282">input type</p></td><td rowspan="1" colspan="1" data-colwidth="638"><p data-renderer-start-pos="9296">any</p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="121"><p data-renderer-start-pos="9305">I → O</p></td><td rowspan="1" colspan="1" data-colwidth="638"><p data-renderer-start-pos="9314">&nbsp;</p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="121"><p data-renderer-start-pos="9320">fields</p></td><td rowspan="1" colspan="1" data-colwidth="638"><ul class="ak-ul"><li><p data-renderer-start-pos="9332">assetType - The value to use for <span class="code" data-renderer-mark="true">assetType</span> on the asset. Defaults to “media”</p></li><li><p data-renderer-start-pos="9412">setAsPrimary - <span class="code" data-renderer-mark="true">true</span> to make the asset primary</p></li></ul></td></tr></tbody></table>

Note that a _primary asset_ is the asset that will be used by default in a "reprocess job" (a job with `isReprocessJob` set to `true`, meaning that the media file was previously ingested and associated with an existing TDO).

### If you have a URL for a file and want to attach it to a TDO as an asset

Create a Webstream Adapter task to download the URL as a stream, then send the stream to this engine.

```pre
  tasks: [
    {
      # Webstream Adapter
      engineId: "9e611ad7-2d3b-48f6-a51b-0a1ba40fe255"
      payload: { url: "{{{UPLOAD_URL}}}" }
      ioFolders: [
        { referenceId: "wsa-output", mode: stream, type: output }
      ]
    }
    {
      # Asset Ingester
      engineId: "75fc943b-b5b0-4fe1-bcb6-9a7e1884257a"
      executionPreferences: { parentCompleteBeforeStarting: true }
      ioFolders: [
        { referenceId: "ai-input", mode: stream, type: input }
      ]
    }
  ]
  routes: [
    {
      parentIoFolderReferenceId: "wsa-output"
      childIoFolderReferenceId: "ai-input"
    }
```

If you want to create a brand new TDO and attach the file as an asset to it, then supply the `target` field of the `createJob` call to trigger the creation of a new TDO. If you want to attach the file as an asset to an _existing_ TDO, then use the `targetId` field of `createJob` to specify the TDO by ID.

If you are using `launchSingleEngineJob` instead, then provide the `uploadUrl` to create a new TDO and attach the file to it.

## Chunk Aggregator - V3F

Adapter used to aggregate engine outputs and produce a final output. (It takes multiple `vtn-standard` JSON files and produces a single `vtn-standard` output file.)

<table data-number-column="false"><colgroup><col style="width: 107px;"><col style="width: 572px;"></colgroup><tbody><tr><td rowspan="1" colspan="1" data-colwidth="120"><p data-renderer-start-pos="11009">id</p></td><td rowspan="1" colspan="1" data-colwidth="639"><p data-renderer-start-pos="11015">045e675b-ed7c-43bf-8300-a2f2102f57a4</p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="120"><p data-renderer-start-pos="11057">mode</p></td><td rowspan="1" colspan="1" data-colwidth="639"><p data-renderer-start-pos="11065">Chunk</p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="120"><p data-renderer-start-pos="11076">input type</p></td><td rowspan="1" colspan="1" data-colwidth="639"><p data-renderer-start-pos="11090">application/json</p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="120"><p data-renderer-start-pos="11112">I → O</p></td><td rowspan="1" colspan="1" data-colwidth="639"><p data-renderer-start-pos="11121">&nbsp;</p></td></tr><tr><td rowspan="1" colspan="1" data-colwidth="120"><p data-renderer-start-pos="11127">fields</p></td><td rowspan="1" colspan="1" data-colwidth="639"><p data-renderer-start-pos="11137">none</p></td></tr></tbody></table>
