FROM node:16

WORKDIR /rollcall_app

COPY package*.json .

RUN npm install && npm generate-models

COPY . .

CMD [ "npm run deploy" ]