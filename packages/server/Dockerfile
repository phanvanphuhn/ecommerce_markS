FROM node:16 AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND yarn.lock are copied
COPY package.json yarn.lock ./
COPY prisma ./prisma/

# Install Yarn
RUN npm install -g yarn

# Install app dependencies using Yarn
RUN yarn install --frozen-lockfile

COPY . .

RUN NODE_OPTIONS=--max_old_space_size=4096 yarn build

FROM node:16

WORKDIR /app

# Install jq
RUN apt-get update && \
    apt-get install -y jq && \
    rm -rf /var/lib/apt/lists/*

COPY ./prisma/schema.prisma ./prisma/schema.prisma
COPY --from=builder /app/prisma/migrations ./prisma/migrations

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/*.lock ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/@generated ./dist/@generated
COPY --from=builder /app/entrypoint.sh ./entrypoint.sh

RUN yarn prisma:generate
RUN ["chmod", "+x", "./entrypoint.sh"]
EXPOSE 3000
CMD ["sh", "-c", "./entrypoint.sh" ]