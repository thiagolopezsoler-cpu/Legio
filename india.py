import re

def recomponer_palabras(texto):
    # Une letras separadas por espacios
    texto = re.sub(r"(?<=\w)\s(?=\w)", "", texto)
    # Quita guiones que cortan palabras al final de linea
    texto = re.sub(r"-\s*\n\s*", "", texto)
    # Reemplaza saltos de linea por espacio
    texto = re.sub(r"\n", " ", texto)
    return texto

def buscar_todas_apariciones(texto, palabra="India"):
    texto_limpio = recomponer_palabras(texto)
    patron = re.compile(rf"\b{re.escape(palabra)}\b", re.IGNORECASE)
    matches = [texto_limpio[m.start():] for m in patron.finditer(texto_limpio)]
    if matches:
        return matches
    else:
        return [f"No se encontro '{palabra}'"]

# Leer el archivo
with open("texto_largo.txt", "r", encoding="utf-8") as f:
    texto = f.read()

resultados = buscar_todas_apariciones(texto, "India")

# Imprimir todas las ocurrencias
for i, r in enumerate(resultados, 1):
    print(f"--- Aparicion {i} ---")
    print(r)
    print()
