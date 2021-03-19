FROM node:15.11.0-alpine3.10
COPY ./dist/ /app
COPY ./node_modules/ /node_modules
ENTRYPOINT node /app/index.js