#!/bin/bash
# ══════════════════════════════════════════════════════════
# convertir-webp.sh
# Convierte todas las imágenes JPG/JPEG/PNG a WebP
# Saltando automáticamente las que ya fueron convertidas
# ══════════════════════════════════════════════════════════

BUSQUEDA_DIRS=("./img" "./retiros" "./retiros-holisticos-puerto-lopez")
CALIDAD=85

# Verificar cwebp.exe
if [ ! -f "./cwebp.exe" ]; then
    echo "❌ Error: No se encuentra cwebp.exe en la carpeta actual."
    exit 1
fi

echo "→ Buscando imágenes..."

TOTAL=0
CONVERTIDAS=0
SALTADAS=0

find "${BUSQUEDA_DIRS[@]}" -type f \
\( -iname "*.webp" -o -iname "*.jpeg" -o -iname "*.webp" \) |
while read -r INPUT; do

    TOTAL=$((TOTAL + 1))

    OUTPUT="${INPUT%.*}.webp"

    if [ -f "$OUTPUT" ]; then
        echo "⏭️  Ya existe: $OUTPUT"
        SALTADAS=$((SALTADAS + 1))
        continue
    fi

    ./cwebp.exe -q "$CALIDAD" "$INPUT" -o "$OUTPUT" -quiet

    if [ $? -eq 0 ]; then
        ANTES=$(du -k "$INPUT" | cut -f1)
        DESPUES=$(du -k "$OUTPUT" | cut -f1)
        echo "✓ ${INPUT##*/} — ${ANTES}K → ${DESPUES}K"
        CONVERTIDAS=$((CONVERTIDAS + 1))
    else
        echo "❌ Error convirtiendo: $INPUT"
    fi

done

echo ""
echo "══════════════════════════════════════════════════════"
echo "Conversión finalizada."
echo "══════════════════════════════════════════════════════"
