FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5500

CMD ["node", "customer.js"]