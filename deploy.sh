#!/bin/bash
# File to automate deployments to GitHub Pages

# Name of the project/repo to deploy
PROJECT_NAME="romezvz-portfolio"

# Clean dist folder
rm -rf dist/

# Build the project with a dummy href base
ng build --base-href=/RomezVz/

# Fix the actual base href in the generated index.html
INDEX_PATH="dist/$PROJECT_NAME/browser/index.html"
sed -i 's|<base href="[^"]*"|<base href="/'"$PROJECT_NAME"'/\"|' "$INDEX_PATH"

# Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/$PROJECT_NAME/browser

echo "✅ Deployment completed: https://romezvz.github.io/$PROJECT_NAME/"