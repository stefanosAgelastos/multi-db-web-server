FROM node:16

WORKDIR /

COPY package*.json ./

RUN npm install && npm run generate-models

COPY . .

CMD [ "node", "index.js" ]