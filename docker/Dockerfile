FROM node:24-alpine3.22 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build 

FROM node:24-alpine3.22 AS runner

WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=builder /app/.output .output

RUN apk add --no-cache curl

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD curl -f http://localhost:3000/ || exit 1

EXPOSE 3000
USER node

CMD ["npm","run","preview"]