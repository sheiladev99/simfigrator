#
#
#  Install stage
#
#
FROM node:18-alpine AS base

# install pm2 for running apps.

RUN \
    --mount=type=cache,target=/root/.npm \
    npm install pm2 -g



#
#
#  Build for production
#
#
# Production image, copy all the files and run next
FROM base AS build-prod
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --chown=nextjs:nodejs . .

RUN chown -R nextjs:nodejs /app

RUN chmod -R +x /app/scripts/*

USER nextjs

ENV PORT 3000

ENTRYPOINT ["/app/scripts/entrypoint.sh"]
