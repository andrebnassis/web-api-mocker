# node-mock-api
node api mocker solution

docker build -t "andrebnassis/mock-api:latest" .

//Check if container image has only the necessary files
docker run -d -p 3000:3000 --name mock-api andrebnassis/mock-api
docker exec -it mock-api bash

//Complete command to run image
docker run -v $(pwd)/mock-api:/app/mock-api:ro -v /app/node_modules --env SUBDOMAIN="docker-api" --env URL_PATH="/" -d -p 3000:3000 --name mock-api andrebnassis/mock-api

//Enter inside the container
docker exec -it mock-api bash

//Check logs inside container
docker logs mock-api

#FORCE REMOVE CONTAINER
docker rm -f mock-api

#FORCE REMOVE IMAGE
docker image rm andrebnassis/mock-api

