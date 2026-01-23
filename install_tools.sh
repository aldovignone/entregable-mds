#!/bin/bash

echo "Instalando dependencias para semantic-release y commitlint..."

npm install --save-dev \
  semantic-release \
  @semantic-release/changelog \
  @semantic-release/git \
  @semantic-release/github \
  @semantic-release/npm \
  husky \
  @commitlint/config-conventional \
  @commitlint/cli \
  @semantic-release/commit-analyzer \
  @semantic-release/release-notes-generator
echo "Instalación completada."
echo "---------------------------------------------"
echo " Configurando Husky y Commitlint"
echo "---------------------------------------------"

# Asegurar que package.json tenga el script prepare
echo "Agregando script prepare a package.json..."
npm pkg set scripts.prepare="husky"

# Ejecutar prepare para instalar hooks en .git/hooks
echo "Ejecutando npm run prepare..."
npm run prepare

# Crear directorio .husky si no existe
mkdir -p .husky

# Crear el hook commit-msg
echo "Creando hook commit-msg..."
cat > .husky/commit-msg << 'EOF'
#!/bin/sh
npx --no -- commitlint --edit "$1"
EOF

# Dar permisos de ejecución
chmod +x .husky/commit-msg

# Crear .gitignore dentro de .husky
cat > .husky/.gitignore << 'EOF'
_
EOF

echo "Husky configurado correctamente."
echo "---------------------------------------------"
echo "Prueba un commit inválido para verificar que funciona."