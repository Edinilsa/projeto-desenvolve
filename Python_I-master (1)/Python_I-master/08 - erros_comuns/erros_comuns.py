# ---------------------------------------
# Erros de Lógica e Boas Práticas em Decisões
# ---------------------------------------

# ➤ 1. Erro comum: usar 'or' onde deveria ser 'and'

idade = 20
tem_carteira = False

# ❌ ERRO LÓGICO: esta condição permite dirigir com carteira falsa OU idade incorreta
if idade >= 18 or tem_carteira:
    print("Pode dirigir")  # Errado!
else:
    print("Não pode dirigir")

# ✅ Correto: as duas condições precisam ser verdadeiras (usar 'and')
if idade >= 18 and tem_carteira:
    print("Pode dirigir (condição correta)")
else:
    print("Não pode dirigir (condição correta)")

print("\n---\n")

# ➤ 2. Condições redundantes

nota = 8

# ❌ Forma ruim: repete condições desnecessariamente
if nota >= 0 and nota < 6:
    print("Reprovado")
elif nota >= 6 and nota < 7:
    print("Na média")
elif nota >= 7:
    print("Aprovado")

# ✅ Forma clara e eficiente:
if nota < 6:
    print("Reprovado")
elif nota < 7:
    print("Na média")
else:
    print("Aprovado")

print("\n---\n")

# ➤ 3. Condições desnecessárias ou confusas

# ❌ Desnecessário:
if tem_carteira == True:
    print("Tem carteira")

# ✅ Forma mais clara:
if tem_carteira:
    print("Tem carteira")

# Também funciona com negação:
if not tem_carteira:
    print("Não tem carteira")

print("\n---\n")

# ➤ 4. Condição sempre verdadeira ou sempre falsa

# ❌ Erro comum: comparar string com número
idade = 18
entrada = "18"

if entrada == idade:
    print("As idades são iguais")  # Isso nunca acontece
else:
    print("Os tipos são diferentes!")

# ✅ Corrigir com conversão de tipos:
if int(entrada) == idade:
    print("Agora sim, as idades são iguais!")

