FROM node:16.14.2

WORKDIR /app

COPY package.json
COPY package-lock.json

RUN npm install

RUN npm run build

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]