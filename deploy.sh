#!/bin/bash
# File to automate deployments to GitHub Pages

# Name of the project/repo to deploy
PROJECT_NAME="romezvz-portfolio"

# Clean dist folder
rm -rf dist/

# Build the project with a dummy href base
ng build --base-href=/

# Index path within dist
INDEX_PATH="dist/$PROJECT_NAME/browser/index.html"

# (Optional) Fix the base href in index.html if needed
sed -i 's|<base href="[^"]*"|<base href="/\"|' "$INDEX_PATH"

# Add CNAME file for custom domain
echo "romezvz.com" > dist/$PROJECT_NAME/browser/CNAME

# Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/$PROJECT_NAME/browser

# Final URL of the site
URL="https://romezvz.com"

echo ""
echo "✅ Deploy completed in:"
echo "$URL"
