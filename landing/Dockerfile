FROM nginx:alpine
COPY . /usr/share/nginx/html
RUN rm /usr/share/nginx/html/Dockerfile /usr/share/nginx/html/nginx.conf.template 2>/dev/null; true
COPY nginx.conf.template /etc/nginx/conf.d/default.conf.template
CMD ["/bin/sh", "-c", "envsubst '$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]
