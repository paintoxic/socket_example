FROM node:10.16-alpine as base

#STAGE 1 : Dependecies
FROM base as build

WORKDIR /dependencies
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production

#STAGE 2 Copy files
FROM base as files

WORKDIR /files
COPY src .

#STAGE 3 Deploy
FROM base as deploy

WORKDIR /usr/app
COPY --from=build /dependencies .
COPY --from=files /files ./src
CMD [ "npm", "start" ]