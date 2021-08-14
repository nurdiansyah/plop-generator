FROM node:14.15.0

ARG active_env

ENV ACTIVE_ENV $active_env
ENV NODE_ENV $active_env

COPY ./{{dashCase name}} ./
COPY ./{{dashCase name}}/dist ./dist/
COPY ./{{dashCase name}}/package*.json ./

RUN ls

CMD [ "node", "dist/index.js" ]
