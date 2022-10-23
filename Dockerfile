FROM node:16.15-alpine3.14
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 4000
CMD ["npm", "start"]
