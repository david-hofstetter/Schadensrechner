FROM node:18.12.1-bullseye-slim

WORKDIR /app

COPY . .

RUN npm ci

EXPOSE 3000

ENTRYPOINT ["npm", "start"]