# ---------------------------------------
# Título: Retorno de valores e escopo de variáveis
# ---------------------------------------

# ➤ 1. Função com return (retorna um valor para quem chamou)

def quadrado(numero):
    return numero * numero

# Usando o retorno em outra parte do código
resultado = quadrado(4)
print("O quadrado de 4 é:", resultado)

print("\n--- Escopo de variáveis ---\n")

# ➤ 2. Escopo local: só existe dentro da função

def mensagem():
    texto = "Olá, mundo!"  # variável local
    print(texto)

mensagem()

# print(texto)  # ❌ ERRO! 'texto' não existe fora da função

# ---------------------------------------

print("\n--- Escopo global ---\n")

# ➤ 3. Variáveis globais podem ser usadas dentro da função

nome = "Gustavo"  # variável global

def saudacao():
    print("Olá,", nome)  # funciona!

saudacao()

# ---------------------------------------

print("\n--- Modificando variável global (não recomendado) ---\n")

# ➤ 4. Cuidado: para modificar uma variável global dentro de uma função, é preciso usar 'global'

contador = 0

def incrementar():
    global contador
    contador += 1

incrementar()
incrementar()
print("Contador global:", contador)

# ✅ Melhor prática: retornar o novo valor e atribuir fora

def novo_valor(valor):
    return valor + 1

contador = novo_valor(contador)
print("Contador com return:", contador)

# ---------------------------------------

# ➤ 5. Boas práticas:
# - Prefira usar variáveis locais
# - Use `return` para passar dados entre funções
# - Evite alterar variáveis globais dentro de funções
