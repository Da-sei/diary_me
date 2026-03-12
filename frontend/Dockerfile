FROM node:24-alpine3.23 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

# ソースコードをコピー
COPY . .
RUN npm run build

CMD ["npm", "start"]