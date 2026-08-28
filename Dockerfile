FROM node:22-alpine AS builder

WORKDIR /workspace

COPY . .

RUN npm test
RUN NGINX_COPY_SITE_CONTENT=0 npm run build:nginx

FROM nginx:1.27-alpine

ENV PUBLICATION_ENV=production

RUN apk add --no-cache nginx-mod-http-js

COPY . /usr/share/nginx/html
RUN find /usr/share/nginx/html -name .DS_Store -delete \
  && rm -rf \
    /usr/share/nginx/html/.agents \
    /usr/share/nginx/html/.claude \
    /usr/share/nginx/html/.codex \
    /usr/share/nginx/html/.git \
    /usr/share/nginx/html/.github \
    /usr/share/nginx/html/build \
    /usr/share/nginx/html/dist \
    /usr/share/nginx/html/node_modules \
    /usr/share/nginx/html/server \
    /usr/share/nginx/html/.dockerignore \
    /usr/share/nginx/html/.gitattributes \
    /usr/share/nginx/html/.gitignore \
    /usr/share/nginx/html/Dockerfile \
    /usr/share/nginx/html/package-lock.json \
    /usr/share/nginx/html/package.json \
    /usr/share/nginx/html/publication-routes.json \
    /usr/share/nginx/html/README.md
COPY --from=builder /workspace/build/nginx/html/ /usr/share/nginx/html/
COPY --from=builder /workspace/build/nginx/default.conf.template /etc/nginx/templates/default.conf.template
COPY --from=builder /workspace/server/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /workspace/server/docs-cors.js /etc/nginx/njs/docs-cors.js

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/healthz >/dev/null || exit 1
