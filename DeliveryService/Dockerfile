FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 6500

CMD ["node", "server.js"]