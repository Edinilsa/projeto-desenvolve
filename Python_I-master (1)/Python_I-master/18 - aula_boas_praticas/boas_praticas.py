# ---------------------------------------
# Organização e legibilidade do código
# ---------------------------------------

# ✅ Boas práticas:
# - Use nomes claros para variáveis e funções
# - Divida o código em partes reutilizáveis (funções)
# - Escreva comentários úteis, mas sem exageros
# - Deixe espaços entre blocos lógicos
# - Evite códigos repetidos

# --------------------------
# Função 1: Calcular IMC
# --------------------------

def calcular_imc(peso, altura):
    """Calcula o IMC com base no peso e altura"""
    imc = peso / (altura ** 2)
    return imc

# --------------------------
# Função 2: Classificar IMC
# --------------------------

def classificar_imc(imc):
    """Classifica o IMC de acordo com a tabela padrão"""
    if imc < 18.5:
        return "Abaixo do peso"
    elif imc < 25:
        return "Peso ideal"
    elif imc < 30:
        return "Sobrepeso"
    else:
        return "Obesidade"

# --------------------------
# Função principal
# --------------------------

def exibir_resultado(peso, altura):
    """Mostra o IMC e sua classificação"""
    imc = calcular_imc(peso, altura)
    classificacao = classificar_imc(imc)
    
    print(f"Seu IMC é {imc:.2f} → {classificacao}")

# --------------------------
# Execução do programa
# --------------------------

peso_usuario = 68
altura_usuario = 1.70

exibir_resultado(peso_usuario, altura_usuario)
