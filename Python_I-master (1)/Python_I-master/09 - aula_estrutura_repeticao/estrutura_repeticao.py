# ---------------------------------------
# Laço while com contadores
# ---------------------------------------

# ➤ 1. Estrutura básica do while

contador = 1

while contador <= 5:
    print("Contador:", contador)
    contador += 1  # importante: atualizar o valor para evitar loop infinito

print("Fim do laço!")

# ---------------------------------------

print("\n--- Contagem regressiva ---\n")

# ➤ 2. Contagem regressiva com while

numero = 5

while numero > 0:
    print(numero)
    numero -= 1

print("Lançamento!")

# ---------------------------------------

print("\n--- Evitando loop infinito ---\n")

# ➤ 3. Atenção: loop infinito

# ❌ Cuidado: se esquecer de atualizar o contador, o laço nunca termina
# Exemplo (comentado para não travar o programa):
# i = 0
# while i < 3:
#     print("Erro! Esqueci de atualizar o contador...")

# ---------------------------------------

print("\n--- Exemplo prático: somar de 1 a 100 ---\n")

# ➤ 4. Exemplo prático com acumulador

soma = 0
contador = 1

while contador <= 100:
    soma += contador
    contador += 1

print("Soma de 1 até 100:", soma)

# ---------------------------------------

# ➤ 5. Boas práticas

# - Sempre inicialize o contador antes do while
# - Atualize o contador dentro do bloco
# - Verifique se a condição de parada será alcançada
