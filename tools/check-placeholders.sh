#!/usr/bin/env bash
# Lists every unfilled {{PLACEHOLDER}} in the site. Exits 1 if any remain in the
# legal pages (publishing an incomplete Impressum/Datenschutz is an Abmahnung risk).
cd "$(dirname "$0")/.."
echo "Remaining placeholders:"
grep -on '{{[A-Z_]*}}' index.html impressum.html datenschutz.html | grep -v '{{PLACEHOLDER}}' | sort -u -t: -k3 | sed 's/^/  /'
if grep -q '{{[A-Z_]*}}' impressum.html datenschutz.html; then
  echo; echo "✗ Legal pages are incomplete — do not publish yet."; exit 1
fi
echo; echo "✓ Legal pages complete."
