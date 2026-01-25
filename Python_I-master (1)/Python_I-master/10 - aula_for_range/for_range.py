# ---------------------------------------
# Título: Laço for com range()
# ---------------------------------------

# ➤ 1. Estrutura básica do for com range()

# range(início, fim, passo)
# Obs: o 'fim' NÃO é incluído!

for i in range(1, 6):  # vai de 1 até 5
    print("Contando:", i)

# ---------------------------------------

print("\n--- Contagem regressiva ---\n")

# ➤ 2. Contagem regressiva com for

for i in range(5, 0, -1):  # começa no 5, vai até 1 (passo -1)
    print(i)

print("Lançamento!")

# ---------------------------------------

print("\n--- Tabuada do 3 ---\n")

# ➤ 3. Exemplo prático: tabuada

numero = 3

for i in range(1, 11):
    print(f"{numero} x {i} = {numero * i}")

# ---------------------------------------

print("\n--- Somando de 1 até 100 ---\n")

# ➤ 4. Somando números com for

soma = 0

for i in range(1, 101):
    soma += i

print("Soma de 1 até 100:", soma)

# ---------------------------------------

print("\n--- Usando apenas range() ---\n")

# ➤ 5. Usos comuns de range()

# Apenas o fim (começa do 0)
for i in range(5):
    print("Valor:", i)  # imprime 0 a 4

# Início e fim definidos
for i in range(3, 8):
    print("Valor entre 3 e 7:", i)

# Com passo
for i in range(0, 10, 2):
    print("Pares até 10:", i)

