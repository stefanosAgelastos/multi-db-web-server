FROM node:16

#Setup Working directory on server
WORKDIR /var/index

#Ensure both package.json and package-lock.json are copied into dir
COPY package*.json ./

#Run NPM install for PROD
RUN npm install

#Bundle app source
COPY . .

CMD [ "node", "index.js"]
