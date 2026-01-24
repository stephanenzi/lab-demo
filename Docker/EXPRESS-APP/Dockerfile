FROM node:22

WORKDIR /app

# Copy the package.json
COPY package*.json .

# Install the dependencies
RUN npm ci

# Copy the source code to our app
COPY src/index.js index.js

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]