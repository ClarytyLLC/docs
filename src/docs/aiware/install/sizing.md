# Sizing

To appropriately size an aiware system, you will have to size:
* DB Server
* File Storage
* Engine Capacity

# Individual Servers

### Engine Servers
Recommendations:
* 32GB of SWAP space
* Root partition at least 100GB
* 4 Core servers (or higher)

## Root partition
If the host is going to run docker containers such as engines or applications please expand the root partition to at least 100GB.  It should be large enough to hold all docker images required for running.

aiWARE will auto-remove old engine instance docker containers.  It will not remove old docker images however.

## Validating Engine Performance
Not all servers are created equal.  Many different factors can come into play that affect performance.  It is important to measure the performance of the individual box if running on premise through a hyperviser.  Especially if it is a shared environment.  Please keep in mind, if it is a shared environment and it is oversubscribed the measurements can change depending on the context of the cluster.

### AI Benchmark

This can be installed via docker or via python.

1. Docker

```bash
docker run -it --rm veritone/ai-benchmark

# For GPU
# docker run -it --rm --gpus all veritone/ai-benchmark:gpu
```


1. Python
This will install ai_benchmark and run the test
```bash
virtualenv --python=python3 venv
. ./venv/bin/activate
pip install tensorflow ai_benchmark

echo << EOF > perf.py
from ai_benchmark import AIBenchmark
benchmark = AIBenchmark()
results = benchmark.run()
EOF

python perf.py
```

## Comparison

| Type | Results |
| ---- | ------ |
| m5.4xlarge | Device Inference Score: 365 <br/> Device Training Score: 393 <br/> Device AI Score: 758 |
| macbook 16 | Device Inference Score: 829 <br/> Device Training Score: 803 <br/> Device AI Score: 1632 |

# DB Server

Current sizing guidelines are:
* 4 CPU DB Server, 16 GB RAM for up to 100 Engine Servers
* 8 CPU DB Server, 32 GB RAM for up to 300 Engine Servers

# File Storage

aiWARE keeps a copy of the content for each task in a job such that the tasks can be replayed.  After a set period, aiWARE reclaims disk space.  There will also be logs of all runs on the disk during that period plus library models and other caching.

Suggested formula for disk space:
* Size of Content * # in a day * N days * Number of Engines * 40%

aiWARE can leverage multiple storage servers.

# Engine Sizing
aiWARE scales out horizontally.  If you have few small tasks that take a lot of CPU, then consider a smaller number of larger boxes.  If you have lots of tasks that take 1-3 CPUs consider using lots of smaller boxes.  aiWARE Engine Agent will fill them based on available memory and CPU.

Steps:
1. Understand current CPU Usage based on appropriate metric (MB, Media Hour, Count)
2. Multiple metric by estimated volume in a particular period for all the engines that will run on that content.
3. Sum the CPU Msecs and divide by the period in milli-seconds (3,600,000ms is 1 hour).  That is how many engine cores you need.
4. Group the CPUs (or Cores) into servers.  Either small or large servers.

## Current CPU Usage

To get the current performance of engines on the system, the following query calculates cpu-msecs per megabyte and cpu-msecs per duration
```sql
SELECT t.engine_id, engine_name, count(t.engine_id), SUM(processed_cpu_msecs) as total_cpusecs, SUM(processed_bytes) as total_bytes, SUM(processed_seconds) as total_duration,
       CASE  SUM(processed_bytes) WHEN 0 THEN 0 ELSE round(SUM(processed_cpu_msecs) *1024 * 1024 / SUM(processed_bytes), 5) END as cpumsecs_per_mb,
       CASE  SUM(processed_seconds) WHEN 0 THEN 0 ELSE round(SUM(processed_cpu_msecs) * 3600 / SUM(processed_seconds), 5) END as cpumsecs_per_hour,
       round(SUM(processed_cpu_msecs) / count(t.engine_id), 5) as cpumsecs_per_count
FROM edge.task t, edge.engine e
WHERE task_status = 'complete'
AND e.engine_id = t.engine_id
GROUP BY t.engine_id, engine_name
ORDER BY 2 DESC
```

This will produce a report like:

| engine\_id | engine\_name | count | total\_cpusecs | total\_bytes | total\_duration | cpumsecs\_per\_mb | cpumsecs\_per\_hour | cpumsecs\_per\_count |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 9e611ad7-2d3b-48f6-a51b-0a1ba40fe255 | Webstream Adapter V3F | 1342 | 67224020 | 156696750610 | 0 | 449.84656 | 0 | 50092.41431 |
| 74dfd76b-472a-48f0-8395-c7e01dd7f255 | TV and Radio Adapter V3F | 205049 | 2470862546 | 2340126951863 | 0 | 1107.15667 | 0 | 12050.10776 |
| 352556c7-de07-4d55-b33f-74b1cf237f25 | SI2 Playback segment creator V3F | 311757 | 13772307912 | 2469062916711 | 0 | 5848.90383 | 0 | 44176.41917 |
| 8bdb0e3b-ff28-4f6e-a3ba-887bd06e6440 | SI2 audio/video Chunk creator V3F | 286143 | 3910047051 | 2874203960466 | 0 | 1426.47549 | 0 | 13664.66085 |
| a725de38-f538-4c4a-b835-b0bd4ab1a255 | Podcast Adapter V3F | 110228 | 54780099 | 133671821815 | 0 | 429.71732 | 0 | 496.97082 |
| 8eccf9cc-6b6d-4d7d-8cb3-7ebf4950c5f3 | Output Writer | 300551 | 132072987 | 166576864115 | 0 | 831.37935 | 0 | 439.43619 |

If I wanted to run TVR, SI2 Playback, SI2 audio/video chunk and Output Writer then per count that is 70,310 ms or 70 CPU-Seconds per count.  If that is a 15 minute audio file (on average), and I wanted to process 1,000 files per hour then I would need 70,310 CPU-seconds in an hour on that hardware.  If I am using 4 CPU boxes, then dividing by the period and the number of CPUs (70,310.62397 / period_secs / numCPU) gives me 4.88 boxes which is 5.  I would add another box for overhead.

