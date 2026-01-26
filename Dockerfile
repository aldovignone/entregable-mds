# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /build

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies (including devDependencies for build)
RUN npm ci

# Copy source code
COPY src ./src

# Build TypeScript
RUN npm run build

# Stage 2: Runtime
FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy compiled code from builder
COPY --from=builder /build/dist ./dist

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start application
CMD ["node", "dist/startup.js"]
