<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

# Maintenance 
The following are maintenance steps that you can take to keep your cluster clean. 
## Clean Up Docker Images
You can periodically prune Docker images on Engine nodes. Engine nodes delete expired containers. However, Docker images remain on the instance. 
```
docker image prune -f 
```
