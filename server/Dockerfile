# Use the official Node.js image.
FROM node:19

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the server port
EXPOSE 8080

# Start the server
CMD [ "node", "server.js" ]