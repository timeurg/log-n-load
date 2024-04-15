# syntax=docker/dockerfile:1

FROM node:lts-alpine As development
WORKDIR /home/node/backend
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .
USER node

FROM node:lts-alpine As build
WORKDIR /home/node/backend
COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /home/node/backend/node_modules ./node_modules
COPY --chown=node:node . .
ENV NODE_ENV production
RUN npm run build
RUN npm ci --only=production && npm cache clean --force
USER node

FROM node:lts-alpine As production
WORKDIR /home/node/backend
ENV NODE_ENV production
COPY --chown=node:node --from=build /home/node/backend/node_modules ./node_modules
COPY --chown=node:node --from=build /home/node/backend/dist ./dist
USER node
CMD [ "node", "dist/main.js" ]