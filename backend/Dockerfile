FROM node:19-slim

COPY package.json /api/
WORKDIR /api
RUN npm install
#TODO: what about files for ssl?

COPY api.js /api/

EXPOSE 3001
CMD [ "node", "api.js" ]

#  docker build -t api .
# docker run -it api bash