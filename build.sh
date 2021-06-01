#!/bin/sh

LOGO_SIZES=(48 16)
for size in $LOGO_SIZES; do
  echo "--> Creating logo ${size}x${size}..."
  convert logo128.png -resize ${size}x${size} logo${size}.png
done

echo "--> Packaging to wikipedia-tw.xpi"
rm wikipedia-tw-redirector.xpi /tmp/wikipedia-tw-redirector.xpi
zip /tmp/wikipedia-tw-redirector.xpi logo.svg logo*.png background.js manifest.json
mv /tmp/wikipedia-tw-redirector.xpi .
