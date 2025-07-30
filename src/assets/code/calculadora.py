def solicitar_operacao_ao_usuario():
    print("Escolha a operação:")
    print("1 - Soma")
    print("2 - Subtração")
    print("3 - Multiplicação")
    print("4 - Divisão")
    print("0 - Sair")
    operacao = int(input("Digite o número da operação desejada: "))
    return operacao


def solicitar_numeros_ao_usuario():
    try:
        primeiro_numero = float(input("Digite o primeiro número: "))
        segundo_numero = float(input("Digite o segundo número: "))
        return primeiro_numero, segundo_numero
    except ValueError:
        print("Erro: você deve digitar números válidos (ex: 10 ou 3.14).")
        return None


def calcular_soma(a, b):
    return a + b


def calcular_subtracao(a, b):
    return a - b


def calcular_multiplicacao(a, b):
    return a * b


def calcular_divisao(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("Erro: divisão por zero não é permitida.")
        return None


def calcular(operacao, a, b):
    if operacao == 1:
        return calcular_soma(a, b)
    elif operacao == 2:
        return calcular_subtracao(a, b)
    elif operacao == 3:
        return calcular_multiplicacao(a, b)
    elif operacao == 4:
        return calcular_divisao(a, b)
    else:
        return None


def exibir_resultado_na_tela(resultado_calculado):
    print("O resultado da operação é:", resultado_calculado)


def exibir_mensagem_operacao_invalida():
    print("Operação inválida. Por favor, escolha 1 para Soma, 2 para Subtração, 3 para Multiplicação ou 4 para Divisão.")


def executar_calculadora_simples():
    while True:
        operacao_escolhida = solicitar_operacao_ao_usuario()
        if operacao_escolhida not in operacao:
            exibir_mensagem_operacao_invalida()
            return
        elif operacao_escolhida == 0:
            print("Saindo do programa. Até mais!")
            break
        numero1, numero2 = solicitar_numeros_ao_usuario()
        resultado = calcular(operacao_escolhida, numero1, numero2)
        exibir_resultado_na_tela(resultado)


if __name__ == "__main__":
    executar_calculadora_simples()
