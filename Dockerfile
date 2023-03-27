# Base stage
FROM node:16-alpine AS base

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

# Migrate stage
FROM base AS migrate

RUN yarn global add @nestjs/cli
RUN yarn prisma generate

COPY entrypoint.sh .
RUN chmod +x entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]

# Build stage
FROM base AS build

RUN yarn global add @nestjs/cli
RUN yarn prisma generate
RUN yarn build

# Production stage
FROM base AS production

COPY --from=build /app/dist /app/dist

EXPOSE 3000
CMD ["yarn", "run", "start:prod"]
