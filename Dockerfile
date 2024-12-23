FROM node:20-alpine

WORKDIR /index

COPY yarn.lock package.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 9876

CMD ["node", "dist/index.js"]
