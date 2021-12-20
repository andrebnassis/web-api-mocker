# docker mock-api
This repository is responsible for implementing a docker mock-api image solution for frontend `development purposes`.  
Behind the scenes, It combines [connect-api-mocker](https://github.com/muratcorlu/connect-api-mocker) and [localtunnel](https://github.com/localtunnel/localtunnel) packages in a single docker image solution.

You can find the local image here:
https://hub.docker.com/r/andrebnassis/mock-api

## Hello World

1. run the following command:  
```bash
 docker run --env SUBDOMAIN="custom-subdomain" --env URL_PATH="/api" -d -p 3000:3000 --name mock-api andrebnassis/mock-api
```

2. Then you'll be able to see an API response sample by accessing:  
http://localhost:3000/api  
AND/OR  
https://custom-subdomain.loca.lt/api  
# Getting Started

The image uses `connect api mocker` package behind the scenes, so, you can follow its [Directory Structure documentation](https://github.com/muratcorlu/connect-api-mocker#directory-structure) to create the your own api mocker folder structure

## docker-compose

The repo has a docker-compose file and you can just import it on your project, adjust to your needs, and use it.

### Running container
`docker-compose up -d`

### Stopping container
`docker-compose down -v`

## docker run

You can find the complete docker run command below:

```bash
docker run -v $(pwd)/my-mock-api-folder:/app/mock-api:ro --env SUBDOMAIN="custom-subdomain" --env URL_PATH="/api" -d -p 3000:3000 --name mock-api andrebnassis/mock-api
```

### port:

It runs over port 3000.
### volume:

`$(pwd)/my-mock-api-folder:/app/mock-api:ro`:  

- `$(pwd)/my-mock-api-folder` is the folder's path related to your `connect api mocker` mock api directory.  

### environment variables:

`SUBDOMAIN="custom-subdomain"`:  
- (OPTIONAL) It is the subdomain of the url. It generates the url `https://<SUBDOMAIN>.loca.lt/`.  
> PS: If not passed, it generates a random subdomain and you can check by running `docker logs` command on your container

`URL_PATH`:  
- (OPTIONAL) It is a path related to the url. For example: `"/api"`.  
> PS: If not passed, it is filled with `"/"`  


# Docker command tips:

If you just follow the docker commands on README, here it is some tips that will fits you:
## Enter inside the container  
`docker exec -it mock-api bash`

## Check logs inside container  
`docker logs mock-api`

## FORCE REMOVE CONTAINER  
`docker rm -f mock-api`

## FORCE REMOVE IMAGE  
`docker image rm andrebnassis/mock-api`
## Build the image locally using Dockerfile
`docker build -t "andrebnassis/mock-api:latest"`