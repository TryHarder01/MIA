FROM node:19-slim

COPY package.json /ui/
WORKDIR /ui/
RUN npm install
RUN npm install -g serve

COPY src/  /ui/src
COPY public /ui/public

RUN npm run build

CMD npm start
# CMD serve -s /app/build/

#  docker build -t ui .
