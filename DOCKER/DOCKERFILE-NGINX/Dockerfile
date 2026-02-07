FROM nginx:1.27.0

RUN apt-get update -y
RUN apt-get install vim -y 

# /usr/share/nginx/html is the default location for nginx web files
COPY index.html /usr/share/nginx/html/index.html