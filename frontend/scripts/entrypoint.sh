#!/bin/sh

# Run pm2-runtime instead of pm2 to make sure docker instance dosent exit.
pm2-runtime start ecosystem.config.js
