FROM node:16 AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install

COPY . .

RUN NODE_OPTIONS=--max_old_space_size=4096 npm run build

FROM node:16

WORKDIR /app

COPY ./prisma/schema.prisma ./prisma/schema.prisma
COPY --from=BUILDER /app/prisma/migrations ./prisma/migrations

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/@generated ./dist/@generated

RUN npm run prisma:generate

EXPOSE 3000
CMD ["sh", "-c", "echo ${DATABASE_URL}", "&&","npm run migrate:deploy", "&&", "npm run start:prod" ]