# ---------------------------------------
# Estruturas Condicionais - if, elif, else
# ---------------------------------------

# ➤ 1. Exemplo simples com if

idade = 18

if idade >= 18:
    print("Você é maior de idade.")

# ➤ 2. Estrutura completa com if e else

nome = "Ana"
idade = 16

if idade >= 18:
    print(f"{nome} é maior de idade.")
else:
    print(f"{nome} é menor de idade.")

# ---------------------------------------

print("\n--- Usando elif ---\n")

# ➤ 3. Exemplo com múltiplas condições usando elif

nota = 7.5

if nota >= 9:
    print("Excelente!")
elif nota >= 6:
    print("Aprovado!")
else:
    print("Reprovado!")

# ---------------------------------------

print("\n--- Condições compostas ---\n")

# ➤ 4. Condições com operadores lógicos

idade = 20
tem_carteira = True

if idade >= 18 and tem_carteira:
    print("Pode dirigir!")
else:
    print("Não pode dirigir.")

# ---------------------------------------

print("\n--- Exemplo prático ---\n")

# ➤ 5. Exemplo aplicado: calculadora de IMC

peso = 70
altura = 1.75

imc = peso / (altura ** 2)

print(f"IMC: {imc:.2f}")

if imc < 18.5:
    print("Abaixo do peso")
elif imc < 25:
    print("Peso normal")
elif imc < 30:
    print("Sobrepeso")
else:
    print("Obesidade")

# ---------------------------------------

# ➤ Dica: o bloco de código abaixo do if/elif/else deve estar sempre identado corretamente!
# Python usa indentação (espaços ou tabulação) para definir os blocos de código.