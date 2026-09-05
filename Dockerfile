FROM oven/bun:1-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy package manifests
COPY package.json bun.lock ./

# Install only production dependencies
RUN bun install --frozen-lockfile --production

# Copy application assets and source code
COPY server.ts ./
COPY dist ./dist
COPY src ./src

EXPOSE 3000

CMD ["bun", "run", "start"]
