# Etapa 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Copiamos dependencias y build
COPY package.json package-lock.json ./
RUN npm ci

# Copiamos el resto y generamos la salida estática
COPY . .
RUN npm run build

# Etapa 2: Servidor con Node
FROM node:18-alpine AS runner
WORKDIR /app

# Solo dependencias de producción
COPY package.json package-lock.json ./
RUN npm ci --production

# Copiamos los archivos generados
COPY --from=builder /app/dist ./dist

ENV NODE_ENV=production
EXPOSE 4321

# Arranca el servidor de preview de Astro
CMD ["npm", "run", "preview"]
