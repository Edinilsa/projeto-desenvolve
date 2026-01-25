# ---------------------------------------
# Título: Exercício - Filtragem de Lista com Strings
# ---------------------------------------

# Lista de nomes
nomes = ["Ana", "Carlos", "João", "Beatriz", "Marina", "Felipe", "Otávio"]

# Criar uma nova lista apenas com nomes que contêm a letra "a"
nomes_com_a = []

for nome in nomes:
    if "a" in nome.lower():  # converte para minúsculo antes de buscar
        nomes_com_a.append(nome)

# Resultado
print("Todos os nomes:", nomes)
print("Nomes que contêm a letra 'a':", nomes_com_a)
