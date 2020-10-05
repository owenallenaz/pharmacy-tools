FROM node:14.11.0

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN cd /app && npm install

COPY src /app/src
COPY public /app/public
COPY tsconfig.json /app/tsconfig.json

WORKDIR /app

CMD npm start