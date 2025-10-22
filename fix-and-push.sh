#!/bin/bash

echo "=== Fixing Git Lock Files and Pushing to GitHub ==="
echo ""

# Remove all lock files
echo "Step 1: Removing git lock files..."
rm -f .git/config.lock .git/index.lock .git/gc.pid.lock
echo "✓ Lock files removed"

echo ""
echo "Step 2: Running Node.js push script..."
node push-to-github.js

echo ""
echo "=== Done! ==="
