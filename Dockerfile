FROM node:12.14.1

MAINTAINER Nero <neroht@qq.com>

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/package.json
RUN cd /usr/src/app
RUN npm install

COPY . /usr/src/app

EXPOSE 8090

CMD ["npm", "start"]