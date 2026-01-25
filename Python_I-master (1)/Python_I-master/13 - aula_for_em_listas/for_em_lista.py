# ---------------------------------------
# Título: Iterando listas e strings com for
# ---------------------------------------

# ➤ 1. Iterando sobre uma lista

frutas = ["maçã", "banana", "laranja", "uva"]

print("Lista de frutas:")

for fruta in frutas:
    print("Fruta:", fruta)

# ---------------------------------------

print("\n--- Usando índices ---\n")

# ➤ 2. Iterando com índice (usando range e len)

print("Frutas com índice:")

for i in range(len(frutas)):
    print(f"Índice {i}: {frutas[i]}")

# ---------------------------------------

print("\n--- Iterando com enumerate ---\n")

# ➤ 3. Forma mais elegante com enumerate

for indice, fruta in enumerate(frutas):
    print(f"{indice} → {fruta}")

# ---------------------------------------

print("\n--- Iterando uma string ---\n")

# ➤ 4. Iterando sobre caracteres de uma string

mensagem = "Python"

for letra in mensagem:
    print("Letra:", letra)

# ---------------------------------------

print("\n--- Contando vogais em uma frase ---\n")

# ➤ 5. Exemplo prático: contar vogais em uma frase

frase = "Aprender Python é divertido!"
vogais = "aeiouAEIOU"
contador = 0

for caractere in frase:
    if caractere in vogais:
        contador += 1

print("Número de vogais:", contador)

# ---------------------------------------

print("\n--- Dica extra: strings também são listas de caracteres ---\n")

# Podemos acessar posições específicas da string como se fosse uma lista
print("Primeira letra:", mensagem[0])
print("Última letra:", mensagem[-1])
