# dependencies image
FROM node:22 as base
WORKDIR /app
COPY package.json pnpm-lock.yaml ./

RUN npm i -g pnpm

RUN pnpm install --frozen-lockfile --prefer-offline

# builder image
FROM base as builder
WORKDIR /app
COPY . .
RUN pnpm run build

# production image
FROM nginx:stable as production
WORKDIR /app
COPY --from=builder /app/out /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
