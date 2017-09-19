FROM ubuntu
MAINTAINER Artem <straifer2008@mail.ru>
WORKDIR /diamond/public
ADD /. /diamond
RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm

EXPOSE 3000