FROM node:16 AS builder

# Install Yarn
RUN command -v yarn >/dev/null 2>&1 || { npm install -g yarn; }

# Create app directory
WORKDIR /app
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY yarn.lock ./
COPY prisma ./prisma/

# Install dependencies
RUN yarn install

# Copy the remaining application code to the working directory
COPY . .
RUN yarn generate

# Build the Next.js application
RUN NODE_OPTIONS=--max_old_space_size=4096 yarn build

FROM node:16

WORKDIR /app

# Install jq
RUN apt-get update && \
    apt-get install -y jq && \
    rm -rf /var/lib/apt/lists/*

COPY ./prisma/schema.prisma ./prisma/schema.prisma

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src/generated ./src/generated
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/entrypoint.sh ./entrypoint.sh
COPY . .

RUN yarn run prisma:generate
RUN ["chmod", "+x", "./entrypoint.sh"]
EXPOSE 3000
CMD ["sh", "-c", "./entrypoint.sh" ]
