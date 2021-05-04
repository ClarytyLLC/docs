# Building a Facial Features engine

[badge/API/Yes/green]
[badge/Search/Yes/green]
[badge/UI/Yes/green]

The facial features engines accepts as input a set of face landmarks and associated timestamps, along with an audio input
and its associated timestamp. It computes the correlation between the movement of the face landmarks and the audio. It is
expected that for an actual person, the correlation between the face landmarks and the audio is close to 1.0.

## Engine Manifest

<!-- TODO

All facial features engines should specify the following parameters in their build manifest:

| Parameter | Value |
| --------- | ----- |
| `TODO` | `TODO` |
| `TODO` | `TODO` |

Here is a minimal example `manifest.json` that could apply to a face verification engine:
-->

<!--TODO: Define [](manifest.example.json ':include :type=code json')-->

See the full documentation for [engine manifest standards](/developer/engines/standards/engine-manifest/) for more details.

<!-- TODO ## Engine Input -->

<!-- TODO -->

### Training and Libraries

No training is required for the facial features engine.

## Engine Input

The facial features engine performs [segment processing](/developer/engines/processing-modes/segment-processing/).

It accepts as input a custom binary file containing the following in the respective order:

    1. 8 bytes containing the number of bytes of a byte-encrypted json string
    2. A byte-encrypted JSON string
    3. 8 bytes containing the number of bytes of a binary audio file
    4. Binary audio file

Note: In the future, we plan to expand the capabilities of this engine to input image frames and/or video.

An example of the byte-encrypted JSON string is as follows:

    {
        "faceLandmarks": [ <a time-series of 68-point face landmark objects> ],
        "faceTimes": [ <the timestamp (ms) of each element in the time-series> ],
        "voiceStartTime": <the timestamp (ms) of the beginning of the audio file>
    }

Below is an example of a JSON string containing each of the entries:

    {
        "faceLandmarks":[
            [{"type":"leftEye","locationPoly":[{"x":0.3992494462245779,"y":0.4791871959208469}, ... ]},
             {"type":"leftEyeBrow","locationPoly":[{"x":0.3751081599692518,"y":0.4328096755334755}, ... ]},
             {"type":"rightEye","locationPoly":[{"x":0.5054534265610093,"y":0.4739422820994278}, ... ]},
             {"type":"rightEyeBrow","locationPoly":[{"x":0.5046047780035698,"y":0.39965423487017754}, ... ]},
             {"type":"mouth","locationPoly":[{"x":0.4395773590846622,"y":0.6907280849157791}, ... ]},
             {"type":"nose","locationPoly":[{"x":0.4763590261411557,"y":0.4729081259905319}, ... ]},
             {"type":"jawOutline","locationPoly":[{"x":0.3631841793953267,"y":0.47464472245756806}, ... ]}],
             ...
             [{"type":"leftEye","locationPoly":[{"x":0.4126658274570773,"y":0.4603450470008631}, ... ]},
              {"type":"leftEyeBrow","locationPoly":[{"x":0.39045616012414125,"y":0.41106438140329515}, ... ]},
              {"type":"rightEye","locationPoly":[{"x":0.5192474931024308,"y":0.4613115045267522}, ... ]},
              {"type":"rightEyeBrow","locationPoly":[{"x":0.5186631830886299,"y":0.38466298937949167}, ... ]},
              {"type":"mouth","locationPoly":[{"x":0.4450666400615419,"y":0.6727261704418241}, ... ]},
              {"type":"nose","locationPoly":[{"x":0.48727477197650026,"y":0.46038189699300586}, ... ]},
              {"type":"jawOutline","locationPoly":[{"x":0.3656751344050108,"y":0.47420865840844106}, ... ]}]
        ],
        "faceTimes":[1586993745748, ... ],
        "voiceStartTime":"1586993745671"
    }

## Engine Output

The facial features engine output should be stored as an `object` in the [vtn-standard](/developer/engines/standards/engine-output/).
The `type` of the object is `facial-features`. Each face maps back to a specified user identity which corresponds to an entity in a library;
hence the object includes the `entityId` along with the `libraryId`. The similarity score of the face to the face(s) for
the entity is the `confidence`. The `mode` specifies whether the engine is run in `enroll` or `verify` mode.

### Example

Here is an example of the simplest type of face verification engine output:

[](vtn-standard.example.json ':include :type=code json')
