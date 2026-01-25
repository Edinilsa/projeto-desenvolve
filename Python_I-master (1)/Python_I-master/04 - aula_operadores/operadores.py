# ---------------------------------------
# Título: Operadores Aritméticos e Precedência em Python
# ---------------------------------------

#  1. Operações básicas

a = 10
b = 3

print("a =", a)
print("b =", b)

print("Soma: a + b =", a + b)         # 13
print("Subtração: a - b =", a - b)    # 7
print("Multiplicação: a * b =", a * b)  # 30
print("Divisão: a / b =", a / b)      # 3.333...
print("Divisão inteira: a // b =", a // b)  # 3
print("Resto da divisão: a % b =", a % b)   # 1
print("Exponenciação: a ** b =", a ** b)    # 1000

print("\n--- Precedência dos operadores ---\n")

#  2. Ordem de execução (precedência)

# A precedência segue a mesma lógica da matemática (PEMDAS):
# Parênteses > Expoentes > Multiplicação e Divisão > Soma e Subtração

resultado1 = 2 + 3 * 4     # Multiplicação vem primeiro: 2 + (3*4) = 14
resultado2 = (2 + 3) * 4   # Parênteses primeiro: (2+3) * 4 = 20

print("Resultado 1 (2 + 3 * 4):", resultado1)
print("Resultado 2 ((2 + 3) * 4):", resultado2)

print("\n--- Exemplo prático com parênteses ---\n")

# ➤ 3. Exemplo com expressão mais longa

expressao = 10 + 2 * 3 ** 2
# Ordem de execução:
# 3 ** 2 = 9
# 2 * 9 = 18
# 10 + 18 = 28

print("Resultado de 10 + 2 * 3 ** 2 =", expressao)

# Adicionando parênteses para alterar a ordem
outra_expressao = ((10 + 2) * 3) ** 2
# (10 + 2) = 12
# 12 * 3 = 36
# 36 ** 2 = 1296

print("Resultado de ((10 + 2) * 3) ** 2 =", outra_expressao)
