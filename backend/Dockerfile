FROM node:24-alpine3.23 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

# ソースコードをコピー
COPY . .
RUN npx prisma generate
RUN npm run build

CMD ["node", "dist/src/main.js"]