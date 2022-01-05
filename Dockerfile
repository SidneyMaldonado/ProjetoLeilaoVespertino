FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY ./dist/projeto-leilao-vespertino /usr/share/nginx/html
