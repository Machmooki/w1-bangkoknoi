#!/usr/bin/env bash
# Re-encode hero videos for web.
# Prefers system ffmpeg, falls back to ffmpeg-static from node_modules.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIR="$ROOT/public/videos"
cd "$DIR"

FFMPEG="ffmpeg"
if ! command -v ffmpeg >/dev/null 2>&1; then
  STATIC="$ROOT/node_modules/ffmpeg-static/ffmpeg"
  if [[ -x "$STATIC" ]]; then
    FFMPEG="$STATIC"
  else
    echo "ffmpeg not found. Install brew ffmpeg or npm i -D ffmpeg-static"
    exit 1
  fi
fi

encode() {
  local in="$1"
  local out="${in}.tmp.mp4"
  echo "Encoding $in"
  "$FFMPEG" -y -i "$in" \
    -vf "scale='min(1280,iw)':-2" \
    -c:v libx264 -preset medium -crf 28 \
    -an -movflags +faststart \
    "$out"
  mv "$out" "$in"
  ls -lh "$in"
}

for f in w1bangkoknoi-2026.mp4 w1-wellness.mp4 w1-weddings.mp4 w1-boat-trip.mp4; do
  if [[ -f "$f" ]]; then encode "$f"; fi
done

echo "Video optimization complete."
