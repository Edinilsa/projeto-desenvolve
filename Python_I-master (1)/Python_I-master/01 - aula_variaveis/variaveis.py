# ---------------------------------------
# Variáveis e Tipos de Dados em Python
# ---------------------------------------

# Declaração de variáveis

#  Inteiro (int)
idade = 25

#  Decimal (float)
altura = 1.75

#  Texto (str)
nome = "Gustavo"

# ✅ Usando as variáveis
print("Olá,", nome, "você tem", idade, "anos e mede", altura, "m de altura.")
print(f"Olá, {nome}! Você tem {idade} anos e mede {altura}m de altura.")

print("\n--- Verificando os tipos das variáveis ---\n")

# 🧪 Descobrindo o tipo das variáveis
print("Tipo da variável idade:", type(idade))    # <class 'int'>
print("Tipo da variável altura:", type(altura))  # <class 'float'>
print("Tipo da variável nome:", type(nome))      # <class 'str'>

# ⚠️ O Python infere o tipo automaticamente (tipagem dinâmica).