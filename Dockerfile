FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production

COPY . .

RUN yarn global add @nestjs/cli

RUN yarn prisma generate

RUN yarn build

EXPOSE 3000

CMD ["yarn", "run", "start:prod"]
