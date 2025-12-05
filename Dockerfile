# Étape 1 : Build Astro
FROM node:20-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .
RUN pnpm build

# Étape 2 : Serveur NGINX pour les fichiers Astro
FROM nginx:alpine

# Copie du build vers le dossier servi par NGINX
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 pour Traefik
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
