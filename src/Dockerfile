FROM node:14-alpine

WORKDIR /app

COPY . https://github.com/david-hofstetter/Schadensrechner.git

WORKDIR /app/Schadensrechner

RUN npm install

CMD ["npm", "start"]