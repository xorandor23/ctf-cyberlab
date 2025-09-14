FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
ENV FLAG=HMTICTF{flag_example}
COPY . .
CMD ["node", "index.js"]
