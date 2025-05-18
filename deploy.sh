#!/bin/bash

# Nombre del proyecto / repositorio
PROJECT_NAME="romezvz-portfolio"

# Limpiar carpeta dist
rm -rf dist/

# Build del proyecto con base href ficticio (evita ruta local basura)
ng build --base-href=FIXME

# Corregir el base href real en el index.html generado
INDEX_PATH="dist/$PROJECT_NAME/index.html"
sed -i 's|<base href="[^"]*"|<base href="/'"$PROJECT_NAME"'/\"|' "$INDEX_PATH"

# Hacer deploy a GitHub Pages
npx angular-cli-ghpages --dir=dist/$PROJECT_NAME

echo "✅ Deploy completado: https://romezvz.github.io/$PROJECT_NAME/"