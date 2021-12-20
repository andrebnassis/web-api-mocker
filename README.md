# node-mock-api
node api mocker solution

docker build -t "mock-api" .

//Check if container image has only the necessary files
docker run -d -p 3000:3000 --name mock-api-container mock-api
docker exec -it mock-api-container bash

//Complete command to run image
docker run -v $(pwd)/mock-api:/app/mock-api:ro -v /app/node_modules --env SUBDOMAIN="docker-api" --env URL_PATH="/" -d -p 3000:3000 --name mock-api-container mock-api

//Enter inside the container
docker exec -it mock-api-container bash

//Check logs inside container
docker logs mock-api-container

#FORCE REMOVE CONTAINER
docker rm -f mock-api-container

#FORCE REMOVE IMAGE
docker image rm mock-api

