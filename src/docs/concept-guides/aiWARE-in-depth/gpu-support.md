# GPU Support

The aiWARE platform can take advantage of GPUs. This page shows the commands you will run to set up an Nvidia GPU-aware environment (via a Docker container). When the setup is complete, you can install aiWARE components (such as Edge) into that environment, and then GPU-aware cognitive engines can take advantage of GPU-based processing.

**See  also:** https://github.com/NVIDIA/nvidia-container-runtime

Nvidia Capabilities:

* compute: required for CUDA and OpenCL applications.
* compat32: required for running 32-bit applications.
* graphics: required for running OpenGL and Vulkan applications.
* utility: required for using nvidia-smi and NVML.
* video: required for using the Video Codec SDK.
* display: required for leveraging X11 display.

Run the following commands in a terminal:

```pre
# Fetch required pieces
curl -s -L https://nvidia.github.io/nvidia-container-runtime/gpgkey | apt-key add -
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/nvidia-container-runtime/$distribution/nvidia-container-runtime.list | tee /etc/apt/sources.list.d/nvidia-container-runtime.list
apt-get update && apt-get upgrade -y

apt-get install -y nvidia-cuda-toolkit nvidia-driver-450 nvidia-container-runtime docker.io
service docker restart

# Validate Nvidia install
nvcc --version

# Test it
docker run -it --rm --gpus all ubuntu nvidia-smi

# Check system
nvidia-container-cli info # Get host OS
docker run -it --rm --gpus all ubuntu nvidia-smi # Validate Docker can run it

NVRM version:   450.80.02
CUDA version:   11.0

Device Index:   0
Device Minor:   0
Model:          Tesla K80
Brand:          Tesla
GPU UUID:       GPU-2105a3c9-41dd-26fa-c8cd-5918c988ec90
Bus Location:   00000000:00:1e.0
Architecture:   3.7
```
