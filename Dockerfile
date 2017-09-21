FROM ubuntu:16.04
MAINTAINER straifer2008@gmail.com


ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && apt-get install -y nginx
ADD Docker/nginx.conf /etc/nginx/
COPY public /www
EXPOSE 80

VOLUME /www

CMD /usr/sbin/nginx
