FROM node:20-alpine AS builder

# Active pnpm via corepack
RUN corepack enable

WORKDIR /app

# Copie uniquement les fichiers nécessaires d'abord (cache Docker)
COPY package.json pnpm-lock.yaml ./

# Installe les deps
RUN pnpm install --frozen-lockfile

# Copie le reste
COPY . .

# Build Astro
RUN pnpm build


# --- NGINX ---
FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d/*

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]