# ---------------------------------------
# Título: Operadores Relacionais e Lógicos em Python
# ---------------------------------------

#  1. Operadores Relacionais (retornam True ou False)

a = 10
b = 5

print("a =", a)
print("b =", b)

print("a == b:", a == b)    # Igual?
print("a != b:", a != b)    # Diferente?
print("a > b:", a > b)      # Maior?
print("a < b:", a < b)      # Menor?
print("a >= b:", a >= b)    # Maior ou igual?
print("a <= b:", a <= b)    # Menor ou igual?

# ➤ Esses operadores retornam um valor booleano: True ou False

print("\n--- Operadores Lógicos ---\n")

# ➤ 2. Operadores Lógicos: and, or, not

idade = 20
tem_carteira = True

# AND → todas as condições precisam ser verdadeiras
print("Pode dirigir?", idade >= 18 and tem_carteira)  

# OR → basta uma condição ser verdadeira
tem_autorizacao = False
print("Pode entrar na festa?", idade >= 18 or tem_autorizacao)  

# NOT → inverte o valor lógico
chovendo = False
print("Está um bom dia para sair?", not chovendo)  

# ➤ 3. Combinação de operadores

nota = 7.5
frequencia = 80

aprovado = nota >= 6 and frequencia >= 75
print("Está aprovado?", aprovado)