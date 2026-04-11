#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: bun run new-post <slug>"
  echo "Example: bun run new-post my-first-post"
  exit 1
fi

SLUG="$1"
DATE=$(date +%Y-%m-%d)
DIR="src/content/blog/${SLUG}"
FILE="${DIR}/index.md"

if [ -f "$FILE" ]; then
  echo "Error: $FILE already exists"
  exit 1
fi

mkdir -p "$DIR"

cat > "$FILE" << EOF
---
title: ""
date: ${DATE}
description: ""
tags: []
---

EOF

echo "Created $FILE"
