FROM node 
WORKDIR /app
COPY package.json package-lock.json
RUN nmp install
COPY . .
RUN nmp run build --proud
