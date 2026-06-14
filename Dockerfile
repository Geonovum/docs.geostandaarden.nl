FROM node:22-alpine

ENV NODE_ENV=production
ENV PUBLICATION_ENV=production
ENV CSP_MODE=enforce
ENV HSTS_ENABLED=true
ENV HOST=0.0.0.0
ENV PORT=8080

WORKDIR /app

COPY . .

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:' + (process.env.PORT || 8080) + '/healthz').then(r => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"

USER node

CMD ["npm", "start"]
