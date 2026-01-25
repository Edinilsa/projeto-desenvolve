# ---------------------------------------
# Introdução às Listas e Métodos Básicos
# ---------------------------------------

# ➤ 1. Criando listas

frutas = ["maçã", "banana", "laranja"]

print("Lista de frutas:", frutas)

# As listas podem conter vários tipos:
mistura = [1, "texto", 3.14, True]
print("Lista com tipos mistos:", mistura)

# ---------------------------------------

print("\n--- Acessando elementos ---\n")

# ➤ 2. Acessando itens (indexação começa em 0)

print("Primeira fruta:", frutas[0])    # maçã
print("Última fruta:", frutas[-1])     # laranja

# ---------------------------------------

print("\n--- Modificando itens ---\n")

# ➤ 3. Modificando um item da lista

frutas[1] = "abacaxi"
print("Lista modificada:", frutas)

# ---------------------------------------

print("\n--- Métodos úteis de listas ---\n")

# ➤ 4. Métodos básicos

frutas.append("uva")           # adiciona no final
print("Após append:", frutas)

frutas.remove("maçã")          # remove o valor (se existir)
print("Após remove:", frutas)

frutas.insert(1, "kiwi")       # insere na posição desejada
print("Após insert:", frutas)

frutas.sort()                  # ordena em ordem alfabética
print("Após sort:", frutas)

# ---------------------------------------

print("\n--- Outras operações úteis ---\n")

# ➤ 5. Outras funções úteis com listas

tamanho = len(frutas)          # tamanho da lista
print("Quantidade de frutas:", tamanho)

existe = "uva" in frutas       # verifica se existe na lista
print("Uva está na lista?", existe)

indice = frutas.index("kiwi")  # posição do item
print("Índice do kiwi:", indice)

frutas.pop()                   # remove o último item
print("Após pop:", frutas)

# ---------------------------------------

print("\n--- Lista vazia ---\n")

# ➤ 6. Lista vazia e preenchimento dinâmico

numeros = []

for i in range(5):
    numeros.append(i)

print("Lista de números preenchida dinamicamente:", numeros)
