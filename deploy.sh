#!/usr/bin/env bash
# Deploy script: builds the React app, rsyncs `build/` to your server, and reloads nginx.
# Edit the variables below to match your server and domain.

set -euo pipefail

# === Configuration (edit) ===
SERVER_USER="youruser"
SERVER_HOST="your.server.ip.or.host"
REMOTE_PATH="/var/www/portfolio"
SSH_PORT=22
RSYNC_OPTS="-avz --delete"
# Optional: nginx site name to reload
NGINX_SITE="portfolio"

# === End configuration ===

echo "Building the app..."
npm run build

echo "Syncing build/ to ${SERVER_USER}@${SERVER_HOST}:${REMOTE_PATH}"
rsync ${RSYNC_OPTS} -e "ssh -p ${SSH_PORT}" build/ "${SERVER_USER}@${SERVER_HOST}:${REMOTE_PATH}/"

echo "Reloading nginx on remote server..."
ssh -p ${SSH_PORT} "${SERVER_USER}@${SERVER_HOST}" "sudo nginx -t && sudo systemctl reload nginx"

echo "Deployed to ${SERVER_HOST}:${REMOTE_PATH}"
