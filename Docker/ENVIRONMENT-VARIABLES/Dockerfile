FROM node:22-alpine

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .
# Set environment variable PORT to 5000
ENV PORT=5000
ENV APP_NAME="My Awesome App"

CMD ["node", "src/index.js"]