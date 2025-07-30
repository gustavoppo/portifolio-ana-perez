TIPO_REFRIGERANTE = "Refrigerante"
TIPO_SUCO = "Suco"

ORDEM_VIAGEM = "Para Viagem"
ORDEM_COMER_AQUI = "Comer Aqui"

BEBIDAS_CONFIG = {
    TIPO_REFRIGERANTE: {
        "sabores": ["Coca", "Guaraná"],
        "tamanhos": [300, 500, 700],
        "copo": "Copo de papel",
        "gelo_padrao": "6 pedras de gelo"
    },
    TIPO_SUCO: {
        "sabores": ["Suco de Uva", "Suco de Laranja"],
        "tamanhos": [300, 500],
        "copo": "Copo de plástico",
        "gelo_padrao": "12 pedras de gelo"
    }
}

ORDENS = {
    ORDEM_VIAGEM: "Tampa sem furo",
    ORDEM_COMER_AQUI: "Tampa com furo"
}


class ErroDeBebidaInvalida(Exception):
    pass


class ErroDeOrdemInvalida(Exception):
    pass


def validar_bebida(tipoDeBebida, saborDaBebida, tamanhoDaBebida):
    if tipoDeBebida not in BEBIDAS_CONFIG:
        raise ErroDeBebidaInvalida("Tipo de bebida inválido.")

    bebida = BEBIDAS_CONFIG[tipoDeBebida]

    if saborDaBebida not in bebida["sabores"]:
        raise ErroDeBebidaInvalida("Sabor de bebida inválido.")

    if tamanhoDaBebida not in bebida["tamanhos"]:
        raise ErroDeBebidaInvalida("Tamanho de bebida inválido.")


def configurar_recipiente_e_gelo(tipoDeBebida, pedidoEspecial):
    bebida = BEBIDAS_CONFIG[tipoDeBebida]
    copo = bebida["copo"]
    gelo = "Sem gelo" if pedidoEspecial else bebida["gelo_padrao"]
    return copo, gelo


def configurar_tampa(tipoDaOrdem):
    if tipoDaOrdem not in ORDENS:
        raise ErroDeOrdemInvalida("Tipo de ordem inválido.")
    return ORDENS[tipoDaOrdem]


def EnviarOrdemAoABS(tipoDeBebida, saborDaBebida, tamanhoDaBebida, tipoDaOrdem, pedidoEspecial):
    validar_bebida(tipoDeBebida, saborDaBebida, tamanhoDaBebida)
    copo, gelo = configurar_recipiente_e_gelo(tipoDeBebida, pedidoEspecial)
    tampa = configurar_tampa(tipoDaOrdem)

    return f"A bebida selecionada, foi servida em: {copo}, contendo {gelo}, com {tamanhoDaBebida}ml, e {tampa}."


testes = [
    (TIPO_REFRIGERANTE, "Coca", 500, ORDEM_VIAGEM, False),
    (TIPO_SUCO, "Suco de Laranja", 300, ORDEM_COMER_AQUI, False),
    (TIPO_SUCO, "Coca", 300, ORDEM_VIAGEM, False),
    (TIPO_REFRIGERANTE, "Suco de Uva", 700, ORDEM_COMER_AQUI, False),
    (TIPO_SUCO, "Suco de Uva", 700, ORDEM_COMER_AQUI, False),
    (TIPO_REFRIGERANTE, "Guaraná", 500, ORDEM_COMER_AQUI, False),
    (TIPO_SUCO, "Suco de Uva", 500, "Entrega no Carro", False),
    (TIPO_SUCO, "Suco de Laranja", 500, ORDEM_VIAGEM, False),
    (TIPO_REFRIGERANTE, "Guaraná", 1000, ORDEM_VIAGEM, False),
    (TIPO_REFRIGERANTE, "Guaraná", 700, ORDEM_COMER_AQUI, True),
    (TIPO_SUCO, "Suco de Laranja", 500, ORDEM_COMER_AQUI, True)
]

for t in testes:
    try:
        resultado = EnviarOrdemAoABS(*t)
        print(resultado)
    except ErroDeBebidaInvalida as e:
        print(f"Erro de Bebida: {e}")
    except ErroDeOrdemInvalida as e:
        print(f"Erro de Ordem: {e}")
