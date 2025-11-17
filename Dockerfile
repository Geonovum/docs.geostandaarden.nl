# Build stage: install dependencies and generate the landing page
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
COPY scripts ./scripts
COPY pubDomainList.json ./
COPY . .

RUN npm ci
RUN npm run generate:index

# Runtime stage: serve the static site
FROM node:20-alpine
WORKDIR /usr/src/app

COPY --from=builder /app /usr/src/app
ENV PORT=8080
EXPOSE 8080

CMD ["npm", "run", "start"]
