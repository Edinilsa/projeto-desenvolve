# ---------------------------------------
# Instruções, Expressões e Erros Comuns em Python
# ---------------------------------------

# ➤ 1. O que é uma expressão?

# Uma expressão é qualquer parte do código que **retorna um valor**
resultado = 2 + 3    # expressão: 2 + 3
print(resultado)     # expressão dentro de uma instrução

# Outras expressões:
print(10 * 5)
print("Olá " + "mundo")
print(len("Python"))


# ➤ 2. O que é uma instrução (comando)?

# Uma instrução executa uma ação — como atribuição ou exibição
# Exemplos de instruções:
idade = 25          # instrução de atribuição
print("Idade:", idade)  # instrução de exibição

# Combinação: instruções podem conter expressões
soma = 4 + 6        # expressão: 4 + 6, instrução: atribuição do resultado
print(soma)         # expressão: soma, instrução: exibir


# ➤ 3. Expressões dentro de expressões

# A função print aceita expressões dentro dela:
print("Resultado da operação:", 2 * (3 + 1))  # expressão dentro de print


print("\n--- Erros comuns de iniciantes ---\n")

# ➤ 4. Erros comuns

# ❌ Esquecer os parênteses em print() (no Python 3)
# print "Hello"   # SyntaxError

# ✅ Correto:
print("Hello")

# ❌ Escrever uma expressão solta sem usá-la
4 + 5   # Não acontece nada — Python calcula mas ignora (sem print, sem atribuição)

# ✅ Correto:
print(4 + 5)  # Agora o valor é mostrado

# ❌ Tentar usar uma variável não declarada
# print(nome)  # NameError: name 'nome' is not defined

# ✅ Correto:
nome = "Ana"
print(nome)

# ❌ Tentar somar número com texto
# print("Idade: " + 25)  # TypeError

# ✅ Correto:
print("Idade: " + str(25))  # Conversão para string

