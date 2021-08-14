# multi-stage Docker build with testing node_modules and Cypress binary
# discarded before serving in production
# https://glebbahmutov.com/blog/making-small-docker-image/

# testing image - we really want to cache AS MUCH AS POSSIBLE
# so we build like this
#   - copy package files
#   - run "npm ci"
#   - copy spec files
# this way Cypress and node_modules are cached as long as package files stay same
# Docker build looks at the file checksums during each "COPY ..." command
# and if the copied files were the same, the image layer is cached and not recomputed
# https://docs.docker.com/v17.09/engine/userguide/eng-image/dockerfile_best-practices/#build-cache
# every other command like "RUN npm ci" is cached by default unless the command itself has been changed
FROM cypress/base:12 as TEST
WORKDIR /app

# dependencies will be installed only if the package files change
RUN ls -la
COPY ../{{dashCase name}}-e2e/ ./cypress
# COPY src /app/src
# COPY package.json /app/package.json
# COPY package-lock.json /app/package-lock.json
# COPY cypress /app/cypress
# COPY cypress.json /app/cypress.json
# COPY static /app/static
# COPY tsconfig.json /app/tsconfig.json
# COPY gatsby-browser.js /app/gatsby-browser.js
# COPY gatsby-config.js /app/gatsby-config.js
# COPY gatsby-node.js /app/gatsby-node.js
# COPY .env.production /app/.env.production
# # COPY gatsby-ssr.js /app/gatsby-ssr.js
# COPY .cache /app/.cache

# by setting CI environment variable we switch the Cypress install messages
# to small "started / finished" and avoid 1000s of lines of progress messages
# https://github.com/cypress-io/cypress/issues/1243
ENV CI=1
RUN npm ci

# BUILD PRODUCTION BUNDLE
RUN npm run build

# tests will rerun if the "cypress" folder, "cypress.json" file or "public" folder
# has any changes
# COPY public /app/public
# RUN ls -la
# RUN ls -la /app/public

#
# ALWAYS run e2e Cypress tests
#

# FROM node:12.16.2-alpine3.11
RUN npm run test:ci

# show the size of the current folder so we know
RUN ls -la
RUN du -sh
