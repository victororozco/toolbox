# Build Stage
FROM node:14 as builder_stage
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ["package.json", "."]
RUN npm install --only=prod
COPY .env.example .env
COPY . .

# Run Stage
FROM builder_stage as run_stage

RUN mkdir -p /usr/src/app
COPY --chown=node:node --from=builder_stage /usr/src/app /usr/src/app

WORKDIR /usr/src/app
COPY ./docker/local/start.sh .

USER node

EXPOSE 3001
CMD [ "npm", "run", "start:dev" ]
