ARG NODE_VERSION=19

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

CMD ["npm","run","dev"]