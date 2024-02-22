
# Stage 1: Build Stage
FROM node:latest as build-stage

# Set the working directory
WORKDIR /app/care-bear

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production Stage
FROM nginx:stable-alpine as production-stage

# Copy the built files from the build stage to Nginx HTML directory
COPY --from=build-stage /app/care-bear/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to start Nginx with daemon mode
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
