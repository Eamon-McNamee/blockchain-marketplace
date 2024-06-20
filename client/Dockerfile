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

# Expose the client port
EXPOSE 3000

# Start the React development server
CMD [ "npm", "start" ]