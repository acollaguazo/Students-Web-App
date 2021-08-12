FROM node:12

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json /app

RUN npm install

# Bundle app source
COPY . /app

# Your app binds to port 8080 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
#EXPOSE 8080

CMD [ "node", "app.js"]