# Native Engines in Engine Toolkit

Engine Toolkit for V3F includes a number of native engines such as Webstream Adapter, TV & Radio Adapter, Stream Ingestors (various flavors), and Output Writer. This provides the flexibility to turn engine instances into "super-workers," helping to push data through the initial ingestion pipeline as well as to finalize the engine outputs.

To activate the adapters or stream ingestors, it is recommended that the Docker image containing the Engine Toolkit binary should have `ffmpeg` and `streamlink` modules included. <!-- INTERNAL Internal engines built by Veritone engineers should include these applications and add them to the system path if not installed properly (e.g. via apt-get or apk add). -->

**Engine IDs:**

1. Web stream adaptor (engineId:9e611ad7-2d3b-48f6-a51b-0a1ba40feab4)

2. TV & Radio adaptor (engineId: 74dfd76b-472a-48f0-8395-c7e01dd7fd24)

3. Stream Ingestor v2 for playback (engineId:352556c7-de07-4d55-b33f-74b1cf237f25 )

4. Stream Ingestor v2 for asset creation (engineId: 75fc943b-b5b0-4fe1-bcb6-9a7e1884257a)

5. Stream Ingestor v2 for FFMPEG (engineId: 8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440)

6. OutputWriter (engineId: 8eccf9cc-6b6d-4d7d-8cb3-7ebf4950c5f3)

For more details, see the [Stream Ingestor v2](overview/aiWARE-in-depth/stream-ingestor) page.
