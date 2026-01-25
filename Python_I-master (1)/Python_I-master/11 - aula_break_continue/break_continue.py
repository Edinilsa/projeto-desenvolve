# ---------------------------------------
# Break, continue e controle de fluxo
# ---------------------------------------

# ➤ 1. Usando break → encerra o laço imediatamente

print("Exemplo com break:")

for numero in range(1, 11):
    if numero == 6:
        print("Número 6 encontrado. Interrompendo o laço.")
        break
    print("Número:", numero)

# Resultado: imprime de 1 a 5, depois para

# ---------------------------------------

print("\n---\n")

# ➤ 2. Usando continue → pula a iteração atual

print("Exemplo com continue (pular números pares):")

for numero in range(1, 11):
    if numero % 2 == 0:
        continue  # pula para o próximo número
    print("Número ímpar:", numero)

# Resultado: imprime apenas os ímpares

# ---------------------------------------

print("\n---\n")

# ➤ 3. break e continue com while

print("Usando break com while:")

contador = 1

while True:  # laço infinito
    print("Contador:", contador)
    if contador == 5:
        print("Chegamos a 5. Parando com break.")
        break
    contador += 1

print("\nUsando continue com while:")

contador = 0

while contador < 10:
    contador += 1
    if contador == 4:
        print("Pulando o número 4")
        continue
    print("Contador:", contador)

# ---------------------------------------

# ➤ 4. Boas práticas

# - Use break para **interromper** laços quando encontrar o que procura
# - Use continue para **pular** casos específicos sem parar o laço
# - Evite usar break/continue quando a lógica puder ser resolvida de forma mais clara

