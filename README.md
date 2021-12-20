# node-mock-api
node api mocker solution

docker build . -t "mock-api-image"
docker run -v $(pwd):/app -v /app/node_modules -d -p 3000:3000 --name mock-api mock-api-image