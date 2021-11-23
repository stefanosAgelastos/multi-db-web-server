FROM node:16

WORKDIR /

COPY package.json .

RUN npm install && \
npm rebuild bcrypt --build-from-source && \
npm run generate-models

COPY . .

# VOLUME [ "/app/node_modules" ]

CMD [ "node", "index.js" ]