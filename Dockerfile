FROM node:9-slim
WORKDIR /Rest_api
COPY package.json ./restapi
RUN npm install
COPY /Rest_api .
EXPOSE 5004
CMD ["npm","restapi.js"]
