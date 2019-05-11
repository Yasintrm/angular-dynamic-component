FROM node:10.2 AS builder
WORKDIR /app
RUN npm install -g @angular/cli
COPY app/ .
RUN cd /app && npm i node-sass --save && npm install && ng build --prod

FROM nginx:alpine
WORKDIR /app
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/alternatifbank .