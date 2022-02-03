FROM node:14-alpine

WORKDIR /app

COPY package.json .

RUN yarn

COPY . ./

EXPOSE 3000

CMD ["yarn", "docker:start"]