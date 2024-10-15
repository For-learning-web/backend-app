FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install any needed packages specified in requirements.txt
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

CMD ["npm", "start"]

