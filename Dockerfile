# Étape 1 : Build Astro
FROM node:20-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .
RUN pnpm build

# Étape 2 : Production avec image officielle Astro
FROM ghcr.io/withastro/astro:latest

WORKDIR /app

COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["astro", "preview", "--host", "0.0.0.0", "--port", "3000"]
