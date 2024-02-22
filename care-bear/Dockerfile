

FROM node:latest as build-stage

WORKDIR /app/care-bear

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/care-bear/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# FROM node:12 AS build

# WORKDIR /app

# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install
# COPY . ./
# RUN npm run build

# FROM nginx:1.19-alpine
# COPY --from=build /app/public /usr/share/nginx/html
# >>>>>>> fa1796811e403ad96e493f643d1a715989ccde7e
