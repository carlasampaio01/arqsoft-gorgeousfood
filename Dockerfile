FROM node:carbon AS base

WORKDIR /gorgeousfood/api

FROM base AS dependency

COPY package*.json yarn.lock ./

RUN yarn --pure-lockfile

FROM dependency AS build

WORKDIR /gorgeousfood/api

COPY . /gorgeousfood/api

RUN rm -rf .env

RUN yarn build

FROM mhart/alpine-node

WORKDIR /gorgeousfood/api

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

COPY --from=dependency /gorgeousfood/api/package.json ./

RUN yarn install --production=true

COPY --from=build /gorgeousfood/api/dist ./dist
COPY --from=build /gorgeousfood/api/exports ./exports
RUN mkdir ./cache
RUN mkdir ./cache/files

EXPOSE 3000

CMD ["node", "./dist/server.js"]
