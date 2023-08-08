# Use an official Node.js runtime as the base image
FROM node:20.5

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies inside the Docker image
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 5000 to the outside
EXPOSE 5000

# Define the command to run the application
CMD [ "npx", "nodemon", "main.ts" ]
