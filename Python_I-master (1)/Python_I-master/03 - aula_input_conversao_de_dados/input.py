# ---------------------------------------
#  Captura de dados com input() e conversão de tipos
# ---------------------------------------

# Input() Básico

# O input sempre retorna uma STRING, mesmo que o usuário digite um número
nome = input("Qual é o seu nome? ")
print("Olá,", nome)

# Vamos capturar a idade agora
idade = input("Quantos anos você tem? ")
print("Tipo da variável idade:", type(idade))  # <class 'str'>

# ⚠️ Até aqui, idade ainda é uma string. Isso pode causar erros se tentarmos fazer cálculos:
# print(idade + 5)  # Isso gera erro, pois não podemos somar str com int

print("\n--- Convertendo tipos ---\n")

# 🧠 Parte 2: Conversão de tipos

# Convertendo a idade para inteiro
idade_inteira = int(idade)

# Agora podemos fazer cálculos
idade_futura = idade_inteira + 5
print(f"Daqui a 5 anos, você terá {idade_futura} anos.")

# Capturando altura (com ponto decimal) e convertendo para float
altura = float(input("Qual a sua altura (em metros)? "))
print("Altura informada:", altura)
print("Tipo da variável altura:", type(altura))  # <class 'float'>

# Resumo usando f-string
print(f"\nResumo: {nome} tem {idade_inteira} anos, mede {altura}m e em 5 anos terá {idade_futura} anos.")

# ---------------------------------------
# 🧪 Dica: funções de conversão mais comuns:
# int()   → converte para inteiro
# float() → converte para número decimal
# str()   → converte para texto
# ---------------------------------------