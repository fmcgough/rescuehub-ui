# Stage 1 - the build process
FROM node:8.12.0 as build-deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-deps /app/build /app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
