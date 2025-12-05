# Étape 1 : Build Astro
FROM node:20-alpine AS builder

WORKDIR /app

# Installer pnpm
RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .
RUN pnpm build

# Étape 2 : Serveur de prod (serve un site statique)
FROM node:20-alpine

WORKDIR /app

RUN npm install -g serve

# Copier le build Astro
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
