FROM node:15

RUN npm install -g localtunnel

WORKDIR /app

COPY package.json .

RUN yarn

COPY . ./

ENV PORT 3000

CMD ["yarn", "dev"]