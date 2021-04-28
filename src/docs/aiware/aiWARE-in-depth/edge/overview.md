# V3F Framework

The figure below shows at a high level the V3 Framework (V3F), which is where Engine Toolkit makes requests to Controller for work. The requests are made on behalf of the engines that the Engine Toolkit represents, including native engines such as Webstream Adaptor (WSA), Stream Ingestor (SI), and Output Writer.

![V3F framework](V3F-engine-framework.png)

The Controller queries the database for tasks that are assigned to the engines, and assigns work requests, batches of work items, back to Engine Toolkit.

For each work item in the work request, Engine Toolkit:

1. Retrieves the input data from the filesystem (FS) for the tasks.

2. Invokes the core engine's `/process` webhook.

3. Stores the result back to the filesystem for the next task.

Engine Toolkit also has a heartbeat loop to report back to Controller the work item progress: number of processed chunks, errors, etc.

There is a RunTimeTTL set by Controller as directive to Engine Toolkit to terminate when the time is up. In addition, Controller may issue a `terminate` action as a response to the `getWork` request.

Note that besides the databases, the File System contains the state of jobs/tasks as work is being done: processed chunks, in-processing chunks, or error chunks.  The input/output relationship between tasks is specified in the Edge database and represented in the file system accordingly. For engines to emit input/output chunks or streams, the interaction with the File System should be done by Engine Toolkit to ensure correctness. To learn more about the File System, see [File System](overview/aiWARE-in-depth/file-system).
