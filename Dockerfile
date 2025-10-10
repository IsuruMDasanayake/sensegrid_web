# Stage 1: Build frontend
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with nginx (internal only, no SSL)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/web.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
