FROM node:latest

WORKDIR /app
COPY . .
RUN npm install
COPY . .
CMD npm start
