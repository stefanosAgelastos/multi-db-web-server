# syntax=docker/dockerfile:1

FROM node:16

WORKDIR /var/

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "npm", "run", "dev" ]
