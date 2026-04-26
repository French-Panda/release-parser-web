# Dockerfile
#FROM node:23-alpine
FROM node:25-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy application code
COPY server.js .

# Expose port 8765
EXPOSE 8765

# Start the server
CMD ["node", "server.js"]
