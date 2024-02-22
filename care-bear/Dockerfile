
FROM node:12 AS build

WORKDIR /care-bear

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.19-alpine
COPY --from=build /app/public /usr/share/nginx/html
