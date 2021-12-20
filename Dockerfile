FROM node:14

WORKDIR /app

COPY package.json .

RUN yarn

COPY . ./

ENV MOCK_API_FOLDER "mock-api"
ENV SUBDOMAIN "docker-api"

CMD ["yarn", "docker:start"]