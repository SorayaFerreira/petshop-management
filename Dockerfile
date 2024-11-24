FROM node:16

WORKDIR /app

COPY . .

RUN npm install
RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "start"]
