#!/usr/bin/env bash
# Mobile access helper for local development.
# Run this from the project root after you have built or started the app.

echo "Starting local production server on port 5000..."

# Serve the build locally (requires npx/serve available)
npx serve -s build -l 5000 &
SERVE_PID=$!

echo "Waiting for the local server to start..."
sleep 2

echo "If you have ngrok installed, run the following now in another terminal:"
echo "  ngrok http 5000"
echo "Then open the HTTPS URL shown by ngrok on your mobile phone."

echo "Press Ctrl+C to stop the local server."

wait $SERVE_PID
