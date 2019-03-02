# Dockerfile for test env
FROM node:10.15.2-alpine

ADD package.json ./
ADD package-lock.json ./
ADD dist ./

RUN npm install

CMD npm run test

