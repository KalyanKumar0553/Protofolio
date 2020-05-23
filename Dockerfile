FROM nginx:1.17.1-alpine
COPY /dist/protofolio /usr/share/nginx/html
