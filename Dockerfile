FROM node:18.15.0-alpine3.17

RUN mkdir /service-auth
WORKDIR /service-auth

COPY package*.json .
RUN npm ci

COPY . .
