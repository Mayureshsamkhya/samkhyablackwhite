# Dockerfile

# 1. Builder Stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set build-time environment variables
ENV NEXT_TELEMETRY_DISABLED 1

# Build the application
RUN npm run build

# 2. Runner Stage
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# Set production environment
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy standalone output from the builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Set correct permissions
USER nextjs
EXPOSE 3000

# Set the runtime command
CMD ["node", "server.js"]