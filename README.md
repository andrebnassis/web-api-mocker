# docker web-api-mocker
This repository is responsible for implementing a docker web-api-mocker image solution for frontend `development purposes`.  
Behind the scenes, It combines [connect-api-mocker](https://github.com/muratcorlu/connect-api-mocker) and [localtunnel](https://github.com/localtunnel/localtunnel) packages in a single docker image solution.

You can find the local image here:
https://hub.docker.com/r/andrebnassis/web-api-mocker

## Hello World

1. run the following command:  
```bash
 docker run --env SUBDOMAIN="" --env URL_PATH="/" -d -p 3000:3000 --name web-api-mocker andrebnassis/web-api-mocker
```

2. Then you'll be able to see an API response sample by accessing:  
http://localhost:3000/  

# Getting Started

The image uses `connect api mocker` package behind the scenes, so, you can follow its [Directory Structure documentation](https://github.com/muratcorlu/connect-api-mocker#directory-structure) to create your own web api mocker folder structure

## Sample project using docker-compose

The repo has a `sample/` folder with a docker-compose file and sample file structure requests. You can just copy the entire folder to your project and adjust to your needs.

### Running container
`docker-compose up -d`

### Stopping container
`docker-compose down -v`

## docker run

You can find the complete docker run command below:

```bash
docker run -v $(pwd)/data:/app/data:ro --env SUBDOMAIN="" --env URL_PATH="/" -d -p 3000:3000 --name web-api-mocker andrebnassis/web-api-mocker
```

### port:

It runs over port 3000.
### volume:

`$(pwd)/data:/app/data:ro`:  

- `$(pwd)/data` is the folder's path related to your `connect api mocker` mock api directory.  

### environment variables:

`SUBDOMAIN=""`:  
- (OPTIONAL) It is the subdomain of the url. It generates the url `https://<SUBDOMAIN>.loca.lt/`.  
> PS: If not passed or is already in use, it generates a **random subdomain** and you can check by running `docker logs` command on your container

`URL_PATH`:  
- (OPTIONAL) It is a path related to the url. For example: `"/api"`.  
> PS: If not passed, it is filled with `"/"`  


# Docker command tips:

If you just follow the docker commands on README, here it is some tips that will fits you:
## Enter inside the container  
`docker exec -it web-api-mocker bash`

## Check logs inside container  
`docker logs web-api-mocker`

## FORCE REMOVE CONTAINER  
`docker rm -f web-api-mocker`

## FORCE REMOVE IMAGE  
`docker image rm andrebnassis/web-api-mocker`
## Build the image locally using Dockerfile
`docker build -t "andrebnassis/web-api-mocker:latest"`