# ---------------------------------------
# Título: Fatiamento, busca e boas práticas com strings
# ---------------------------------------

# ➤ 1. Fatiamento de strings (slicing)

mensagem = "Python é incrível!"

# índice:  0123456789...

print("Texto completo:", mensagem)
print("Primeiros 6 caracteres:", mensagem[0:6])    # Python
print("Do 7 até o final:", mensagem[7:])           # é incrível!
print("Últimos 9 caracteres:", mensagem[-9:])      # incrível!

# Também funciona com step (passo)
print("Caracteres alternados:", mensagem[::2])     # Pto énil!

# ---------------------------------------

print("\n--- Busca dentro da string ---\n")

# ➤ 2. Verificando se algo está presente (in)

print("Existe 'Python'?", "Python" in mensagem)     # True
print("Existe 'Java'?", "Java" in mensagem)         # False

# ➤ 3. Usando find() e index()

print("Posição de 'incrível':", mensagem.find("incrível"))  # Retorna índice ou -1
print("Posição de 'Java':", mensagem.find("Java"))          # Retorna -1 (não encontrado)

# ➤ 4. Contando ocorrências

frase = "banana"
print("Quantas vezes 'a' aparece?", frase.count("a"))  # 3

# ---------------------------------------

print("\n--- Boas práticas com strings ---\n")

# ➤ 5. Limpando espaços e padronizando texto

nome = "  Ana Clara  "
print("Nome original:", nome)
print("Nome sem espaços:", nome.strip())       # remove espaços nas bordas
print("Tudo maiúsculo:", nome.upper())         # ANA CLARA
print("Tudo minúsculo:", nome.lower())         # ana clara
print("Primeira letra maiúscula:", nome.strip().capitalize())  # Ana clara
print("Título:", nome.strip().title())         # Ana Clara

# ---------------------------------------

print("\n--- Exemplo prático: validação de entrada ---\n")

# ➤ 6. Exemplo: validando se um email contém "@"

email = " usuario@email.com "

email_limpo = email.strip().lower()

if "@" in email_limpo:
    print("E-mail válido:", email_limpo)
else:
    print("E-mail inválido!")

