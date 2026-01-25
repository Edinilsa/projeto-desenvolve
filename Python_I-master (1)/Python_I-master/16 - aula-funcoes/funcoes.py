# ---------------------------------------
# Título: Definindo funções com def()
# ---------------------------------------

# ➤ 1. Função simples sem parâmetros

def saudacao():
    print("Olá! Seja bem-vindo ao curso de Python.")

# Chamando a função
saudacao()

# ---------------------------------------

print("\n--- Função com parâmetros ---\n")

# ➤ 2. Função com parâmetros

def apresentar(nome):
    print(f"Olá, {nome}! Prazer em te conhecer.")

apresentar("Maria")
apresentar("João")

# ---------------------------------------

print("\n--- Função com dois parâmetros ---\n")

# ➤ 3. Função que realiza um cálculo com dois parâmetros

def somar(a, b):
    resultado = a + b
    print(f"A soma de {a} + {b} é {resultado}")

somar(3, 5)
somar(10, -2)

# ---------------------------------------

print("\n--- Função com retorno ---\n")

# ➤ 4. Função com return (retorna um valor para ser reutilizado)

def calcular_imc(peso, altura):
    imc = peso / (altura ** 2)
    return imc

# Podemos usar o retorno em outras partes do código
meu_imc = calcular_imc(70, 1.75)
print(f"Meu IMC é: {meu_imc:.2f}")

# ---------------------------------------

print("\n--- Boas práticas com funções ---\n")

# ➤ 5. Boas práticas
# - Nome claro e em minúsculas com underline se necessário
# - Comentários explicando o que a função faz
# - Evite funções muito grandes — separe em partes menores

def mensagem_final():
    """Exibe uma mensagem de encerramento"""
    print("Obrigado por assistir! Até a próxima.")

mensagem_final()
