# Auditoria Pre-Renomeacao de Imagens - Marcus Reboque

Data da auditoria: 2026-06-18

Escopo: auditoria de consistencia dos arquivos `RELATORIO_DE_ANALISE_E_RENOMEACAO_DE_IMAGENS_MARCUS_REBOQUE.md` e `MAPA_DE_RENOMEACAO_MARCUS_REBOQUE.csv`, comparados com os arquivos de imagem existentes na raiz e em subpastas. Nenhuma imagem foi alterada, renomeada, movida, convertida ou excluida.

## DIVERGENCIA_82_VERSUS_83_IMAGENS

- Total de imagens encontradas no escopo raiz + subpastas: 83.
- Total de imagens dentro de `Photos-3-001`: 82 (`.jpg`: 6, `.webp`: 76).
- Imagens na raiz do projeto: 1: `logotipo-520x520.png`.
- Arquivo que explica a diferenca: `logotipo-520x520.png`, um ativo de marca classificado como `01_LOGOTIPOS`, localizado fora do lote principal `Photos-3-001`.
- Imagens ocultas ou de sistema contadas: nenhuma encontrada.
- Arquivo contado indevidamente: nao, se o escopo for raiz + subpastas. Se o escopo for apenas o lote baixado em `Photos-3-001`, o logotipo deve ser tratado como ativo adicional/preexistente e nao como foto do lote principal.
- Duplicatas exatas por SHA-256: nenhuma.
- Arquivos com nomes diferentes e conteudo visual identico: nenhum confirmado na revisao visual.

### Lista das 83 imagens inventariadas

| numero | caminho atual | categoria | qualidade | confianca | possivel duplicidade |
| --- | --- | --- | --- | --- | --- |
| 001 | logotipo-520x520.png | 01_LOGOTIPOS | alta | alto | nao |
| 002 | Photos-3-001/7f119755-2119-4a7f-be97-56dcbdd6f8b8.jpg | 14_PEQUENAS_CARGAS | media | alto | nao |
| 003 | Photos-3-001/9fd0c14f-2416-4990-a1b8-050f3f983b42.jpg | 10_MAQUINAS_AGRICOLAS | media | medio | nao |
| 004 | Photos-3-001/78d20617-5dd3-4494-b42f-061f4561708c.jpg | 04_CARROS | alta | alto | nao |
| 005 | Photos-3-001/694e2c35-ff23-44b8-80ea-b343e4bf9660.jpg | 04_CARROS | media | alto | possivel semelhante a #017 e #058 |
| 006 | Photos-3-001/c4ca50b7-8799-4452-8ec1-c8798d201b4b.jpg | 06_VANS | media | alto | nao |
| 007 | Photos-3-001/c48ccf76-6e68-4b38-bf80-d9a7ebe008e9.jpg | 03_MOTOS | alta | alto | nao |
| 008 | Photos-3-001/unnamed (1).webp | 03_MOTOS | media | alto | nao |
| 009 | Photos-3-001/unnamed (2).webp | 10_MAQUINAS_AGRICOLAS | media | medio | nao |
| 010 | Photos-3-001/unnamed (3).webp | 04_CARROS | media | alto | nao |
| 011 | Photos-3-001/unnamed (4).webp | 03_MOTOS | media | alto | nao |
| 012 | Photos-3-001/unnamed (5).webp | 05_CAMINHONETES | media | alto | possivel semelhante a #023 |
| 013 | Photos-3-001/unnamed (6).webp | 11_VEICULOS_ANTIGOS | media | alto | nao |
| 014 | Photos-3-001/unnamed (7).webp | 02_HERO | alta | alto | nao |
| 015 | Photos-3-001/unnamed (8).webp | 13_PEQUENOS_CAMINHOES | alta | alto | nao |
| 016 | Photos-3-001/unnamed (9).webp | 10_MAQUINAS_AGRICOLAS | media | medio | nao |
| 017 | Photos-3-001/unnamed (10).webp | 04_CARROS | alta | alto | possivel semelhante a #005 e #058 |
| 018 | Photos-3-001/unnamed (11).webp | 05_CAMINHONETES | alta | alto | nao |
| 019 | Photos-3-001/unnamed (12).webp | 04_CARROS | baixa | alto | nao |
| 020 | Photos-3-001/unnamed (13).webp | 09_BARCOS_E_JET_SKIS | media | alto | possivel semelhante a #059 |
| 021 | Photos-3-001/unnamed (14).webp | 04_CARROS | alta | alto | nao |
| 022 | Photos-3-001/unnamed (15).webp | 02_HERO | alta | alto | semelhante tematico a #036 e #044 |
| 023 | Photos-3-001/unnamed (16).webp | 02_HERO | alta | alto | possivel semelhante a #012 |
| 024 | Photos-3-001/unnamed (17).webp | 12_EMPILHADEIRAS | media | alto | nao |
| 025 | Photos-3-001/unnamed (18).webp | 06_VANS | media | alto | nao |
| 026 | Photos-3-001/unnamed (19).webp | 20_ATENDIMENTOS_REAIS | media | alto | nao |
| 027 | Photos-3-001/unnamed (20).webp | 06_VANS | media | alto | nao |
| 028 | Photos-3-001/unnamed (21).webp | 05_CAMINHONETES | media | alto | nao |
| 029 | Photos-3-001/unnamed (22).webp | 02_HERO | alta | alto | nao |
| 030 | Photos-3-001/unnamed (23).webp | 04_CARROS | alta | alto | possivel semelhante a #046 |
| 031 | Photos-3-001/unnamed (24).webp | 14_PEQUENAS_CARGAS | media | alto | nao |
| 032 | Photos-3-001/unnamed (25).webp | 13_PEQUENOS_CAMINHOES | alta | alto | nao |
| 033 | Photos-3-001/unnamed (26).webp | 04_CARROS | media | alto | nao |
| 034 | Photos-3-001/unnamed (27).webp | 05_CAMINHONETES | media | alto | nao |
| 035 | Photos-3-001/unnamed (28).webp | 15_CAMINHOES_E_PLATAFORMAS | media | alto | nao |
| 036 | Photos-3-001/unnamed (29).webp | 03_MOTOS | alta | alto | semelhante tematico a #022 e #044 |
| 037 | Photos-3-001/unnamed (30).webp | 14_PEQUENAS_CARGAS | media | alto | nao |
| 038 | Photos-3-001/unnamed (31).webp | 11_VEICULOS_ANTIGOS | media | medio | nao |
| 039 | Photos-3-001/unnamed (32).webp | 06_VANS | alta | alto | nao |
| 040 | Photos-3-001/unnamed (33).webp | 05_CAMINHONETES | baixa | alto | nao |
| 041 | Photos-3-001/unnamed (34).webp | 13_PEQUENOS_CAMINHOES | baixa | alto | nao |
| 042 | Photos-3-001/unnamed (35).webp | 05_CAMINHONETES | media | alto | nao |
| 043 | Photos-3-001/unnamed (36).webp | 16_EQUIPAMENTOS_E_FIXACAO | baixa | medio | nao |
| 044 | Photos-3-001/unnamed (37).webp | 03_MOTOS | alta | alto | semelhante tematico a #022 e #036 |
| 045 | Photos-3-001/unnamed (38).webp | 25_INADEQUADAS_PARA_PUBLICACAO | baixa | medio | nao |
| 046 | Photos-3-001/unnamed (39).webp | 04_CARROS | alta | alto | possivel semelhante a #030 |
| 047 | Photos-3-001/unnamed (40).webp | 04_CARROS | alta | alto | nao |
| 048 | Photos-3-001/unnamed (41).webp | 16_EQUIPAMENTOS_E_FIXACAO | media | alto | nao |
| 049 | Photos-3-001/unnamed (42).webp | 04_CARROS | media | alto | nao |
| 050 | Photos-3-001/unnamed (43).webp | 08_VEICULOS_ESPECIAIS | media | alto | nao |
| 051 | Photos-3-001/unnamed (44).webp | 14_PEQUENAS_CARGAS | baixa | medio | nao |
| 052 | Photos-3-001/unnamed (45).webp | 20_ATENDIMENTOS_REAIS | media | alto | nao |
| 053 | Photos-3-001/unnamed (46).webp | 16_EQUIPAMENTOS_E_FIXACAO | media | medio | nao |
| 054 | Photos-3-001/unnamed (47).webp | 19_ATENDIMENTO_NOTURNO | media | alto | nao |
| 055 | Photos-3-001/unnamed (48).webp | 04_CARROS | media | alto | nao |
| 056 | Photos-3-001/unnamed (49).webp | 14_PEQUENAS_CARGAS | media | medio | nao |
| 057 | Photos-3-001/unnamed (50).webp | 15_CAMINHOES_E_PLATAFORMAS | media | alto | nao |
| 058 | Photos-3-001/unnamed (51).webp | 04_CARROS | media | alto | possivel semelhante a #005 e #017 |
| 059 | Photos-3-001/unnamed (52).webp | 09_BARCOS_E_JET_SKIS | media | alto | possivel semelhante a #020 |
| 060 | Photos-3-001/unnamed (53).webp | 10_MAQUINAS_AGRICOLAS | media | alto | nao |
| 061 | Photos-3-001/unnamed (54).webp | 05_CAMINHONETES | media | alto | nao |
| 062 | Photos-3-001/unnamed (55).webp | 03_MOTOS | media | medio | nao |
| 063 | Photos-3-001/unnamed (56).webp | 05_CAMINHONETES | baixa | alto | nao |
| 064 | Photos-3-001/unnamed (57).webp | 02_HERO | alta | alto | nao |
| 065 | Photos-3-001/unnamed (58).webp | 10_MAQUINAS_AGRICOLAS | alta | alto | hash semelhante a #073; conteudo diferente |
| 066 | Photos-3-001/unnamed (59).webp | 25_INADEQUADAS_PARA_PUBLICACAO | baixa | alto | nao |
| 067 | Photos-3-001/unnamed (60).webp | 05_CAMINHONETES | media | medio | nao |
| 068 | Photos-3-001/unnamed (61).webp | 05_CAMINHONETES | media | alto | nao |
| 069 | Photos-3-001/unnamed (62).webp | 25_INADEQUADAS_PARA_PUBLICACAO | baixa | alto | nao |
| 070 | Photos-3-001/unnamed (63).webp | 08_VEICULOS_ESPECIAIS | media | alto | nao |
| 071 | Photos-3-001/unnamed (64).webp | 11_VEICULOS_ANTIGOS | media | alto | nao |
| 072 | Photos-3-001/unnamed (65).webp | 05_CAMINHONETES | media | alto | nao |
| 073 | Photos-3-001/unnamed (66).webp | 05_CAMINHONETES | alta | alto | hash semelhante a #065; conteudo diferente |
| 074 | Photos-3-001/unnamed (67).webp | 14_PEQUENAS_CARGAS | media | medio | nao |
| 075 | Photos-3-001/unnamed (68).webp | 05_CAMINHONETES | media | alto | nao |
| 076 | Photos-3-001/unnamed (69).webp | 08_VEICULOS_ESPECIAIS | media | alto | nao |
| 077 | Photos-3-001/unnamed (70).webp | 04_CARROS | media | alto | nao |
| 078 | Photos-3-001/unnamed (71).webp | 04_CARROS | media | alto | nao |
| 079 | Photos-3-001/unnamed (72).webp | 05_CAMINHONETES | alta | alto | nao |
| 080 | Photos-3-001/unnamed (73).webp | 05_CAMINHONETES | media | alto | nao |
| 081 | Photos-3-001/unnamed (74).webp | 11_VEICULOS_ANTIGOS | alta | alto | nao |
| 082 | Photos-3-001/unnamed (75).webp | 05_CAMINHONETES | media | alto | nao |
| 083 | Photos-3-001/unnamed.webp | 04_CARROS | media | alto | nao |

## Divergencia Das 15 Paginas

O briefing especifico possui 12 paginas por tipo de veiculo/carga. O relatorio anterior mencionou 15 paginas porque acrescentou tres paginas de servico operacional: `auto socorro 24 horas`, `transporte emergencial` e `transporte programado`. Essas tres paginas adicionais correspondem a modos de atendimento, nao a tipos de veiculo.

As 15 paginas consideradas no relatorio anterior foram:

| pagina | categoria | quantidade_de_imagens | qualidade_media | confianca | observacoes |
| --- | --- | --- | --- | --- | --- |
| motos e motocicletas | 03_MOTOS + HERO relacionado | 7 | media | medio | Boa variedade para cards e pagina especifica; #022 e a melhor opcao principal. Imagens associadas nesta auditoria: #007, #008, #011, #022, #036, #044, #062. |
| carros | 04_CARROS + HERO relacionado | 17 | media | alto | Cobertura mais ampla do acervo; revisar nomes para distinguir sedan, hatch, esportivo e oficina. Imagens associadas nesta auditoria: #004, #005, #010, #017, #019, #021, #029, #030, #033, #046, #047, #049, #055, #058, #077, #078, #083. |
| caminhonetes | 05_CAMINHONETES + HERO relacionado | 19 | media | medio | Forte para pagina comercial; #064 e a melhor candidata a principal. Imagens associadas nesta auditoria: #012, #014, #018, #023, #028, #034, #040, #042, #061, #063, #064, #067, #068, #072, #073, #075, #079, #080, #082. |
| vans | 06_VANS | 4 | media | alto | Quatro imagens utilizaveis; algumas possuem marcas de terceiros no veiculo. Imagens associadas nesta auditoria: #006, #025, #027, #039. |
| utilitarios | 07_UTILITARIOS | 0 | ausente | baixo | O relatorio anterior citou #050, #071 e #074 como apoio, mas elas pertencem melhor a veiculos especiais, veiculos antigos e pequenas cargas. Nao ha cobertura dedicada para 07_UTILITARIOS. Imagens associadas nesta auditoria: nenhuma dedicada. |
| veiculos especiais | 08_VEICULOS_ESPECIAIS | 3 | media | alto | Tres cenas diferentes e aproveitaveis; faltam imagens horizontais fortes para hero. Imagens associadas nesta auditoria: #050, #070, #076. |
| barcos | 09_BARCOS_E_JET_SKIS | 2 | media | alto | Duas imagens utilizaveis; boas para cards, mas sem hero horizontal amplo. Imagens associadas nesta auditoria: #020, #059. |
| maquinas agricolas | 10_MAQUINAS_AGRICOLAS | 5 | media | medio | Boa variedade; algumas maquinas nao comprovam uso agricola, por isso parte da confianca e media. Imagens associadas nesta auditoria: #003, #009, #016, #060, #065. |
| veiculos antigos | 11_VEICULOS_ANTIGOS | 4 | media | medio | Boa cobertura visual; #081 e a melhor imagem da pagina. Imagens associadas nesta auditoria: #013, #038, #071, #081. |
| empilhadeiras | 12_EMPILHADEIRAS | 1 | media | alto | Somente uma imagem vertical; suficiente para card unico, fraca para pagina completa. Imagens associadas nesta auditoria: #024. |
| pequenos caminhoes | 13_PEQUENOS_CAMINHOES | 3 | media | alto | Duas imagens fortes e uma baixa; cobertura boa para cards, moderada para hero. Imagens associadas nesta auditoria: #015, #032, #041. |
| pequenas cargas | 14_PEQUENAS_CARGAS | 6 | media | medio | Boa cobertura; #051 e baixa e #074 tem marca de terceiro, mas ha alternativas fortes. Imagens associadas nesta auditoria: #002, #031, #037, #051, #056, #074. |
| auto socorro 24 horas | 19_ATENDIMENTO_NOTURNO + 20_ATENDIMENTOS_REAIS | 4 | media | alto | Pagina adicional incluida por representar servico 24h/auto socorro, nao uma pagina de tipo de veiculo. Imagens associadas nesta auditoria: #008, #026, #052, #054. |
| transporte emergencial | 20_ATENDIMENTOS_REAIS | 3 | media | alto | Utilizavel, mas com cautela por envolver veiculos avariados e contexto sensivel. Imagens associadas nesta auditoria: #026, #052, #054. |
| transporte programado | 14_PEQUENAS_CARGAS + 16_EQUIPAMENTOS_E_FIXACAO + servicos sem emergencia | 8 | media | medio | Pagina adicional incluida por representar transporte agendado/programado, nao tipo especifico de veiculo. Imagens associadas nesta auditoria: #002, #031, #037, #050, #053, #055, #056, #074. |

No relatorio anterior, a pagina `transporte de utilitarios` foi citada com #050, #071 e #074. A auditoria rebaixa essa cobertura para `AUSENTE`, porque esses arquivos foram classificados visualmente como veiculo especial, veiculo antigo e pequena carga/equipamento, nao como `07_UTILITARIOS`.

## Cobertura Visual Real Por Pagina

| pagina | total | alta | media | baixa | horizontais | verticais | quadradas | variedade de cenas | embarque | veiculo transportado | caminhao/plataforma | card | imagem principal | cobertura |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| motos e motocicletas | 7 | 4 | 3 | 0 | 2 | 0 | 5 | motos individuais, multiplas motos, cena coberta/noturna e plataforma | parcial | sim | sim | sim | sim | FORTE |
| carros | 17 | 7 | 9 | 1 | 5 | 0 | 12 | hatches, sedans, carro esportivo, oficina e rua | pouco | sim | sim | sim | sim | FORTE |
| caminhonetes | 19 | 6 | 11 | 2 | 3 | 0 | 16 | SUVs, picapes, embarque em rampa e veiculo ja transportado | sim | sim | sim | sim | sim | FORTE |
| vans | 4 | 1 | 3 | 0 | 1 | 0 | 3 | furgao/van de servico, van de passageiros e minivan | sim | sim | sim | sim | sim | FORTE |
| utilitarios | 0 | 0 | 0 | 0 | 0 | 0 | 0 | nenhuma imagem dedicada | nao | nao | nao | nao | nao | AUSENTE |
| veiculos especiais | 3 | 0 | 3 | 0 | 0 | 0 | 3 | buggy, UTV/off-road e pequenos veiculos especiais | nao | sim | sim | sim | limitado | FORTE |
| barcos | 2 | 0 | 2 | 0 | 0 | 0 | 2 | barco em plataforma por angulos diferentes | nao | sim | sim | sim | limitado | SUFICIENTE |
| maquinas agricolas | 5 | 1 | 4 | 0 | 0 | 0 | 5 | trator, retroescavadeira/maquina compacta e equipamento rebocavel | sim | sim | sim | sim | sim | FORTE |
| veiculos antigos | 4 | 1 | 3 | 0 | 1 | 0 | 3 | fusca, hatch antigo, utilitario antigo e perua antiga | nao | sim | sim | sim | sim | FORTE |
| empilhadeiras | 1 | 0 | 1 | 0 | 0 | 1 | 0 | uma empilhadeira em transporte | sim | sim | sim | sim | limitado | FRACA |
| pequenos caminhoes | 3 | 2 | 0 | 1 | 2 | 0 | 1 | caminhao carroceria e caminhao bau | nao | sim | sim | sim | sim | SUFICIENTE |
| pequenas cargas | 6 | 0 | 5 | 1 | 0 | 1 | 5 | tubos, perfis metalicos, carga diversa, estrutura e equipamento compacto | sim | sim | sim | sim | sim | FORTE |
| auto socorro 24 horas | 4 | 0 | 4 | 0 | 1 | 0 | 3 | atendimento com luz artificial, veiculos danificados e funcionario junto ao caminhao | sim | sim | sim | sim | limitado | SUFICIENTE |
| transporte emergencial | 3 | 0 | 3 | 0 | 1 | 0 | 2 | carro danificado, SUV danificado e atendimento em luz baixa | sim | sim | sim | com cautela | limitado | SUFICIENTE |
| transporte programado | 8 | 0 | 8 | 0 | 1 | 0 | 7 | cargas metalicas, equipamento industrial, carro em oficina e veiculos especiais | sim | sim | sim | sim | sim | FORTE |

A matriz CSV correspondente foi criada em `MATRIZ_COBERTURA_VISUAL_PAGINAS_MARCUS_REBOQUE.csv`.

## Imagens Inadequadas

| numero | nome atual | caminho | motivo exato | gravidade | recuperacao | correcao recomendada | pode usar apos edicao | destino recomendado |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 045 | unnamed (38).webp | Photos-3-001/unnamed (38).webp | plataforma vermelha sem identidade clara da Marcus Reboque; contexto e placa/ambiente expostos | media | recuperavel com edicao | confirmar origem/autorizacao, recortar ou ocultar dados sensiveis; ainda assim nao usar como prova principal de servico | somente se origem for validada e a edicao resolver dados sensiveis | manter como arquivo interno ou excluir do lote de publicacao, sem apagar o original |
| 066 | unnamed (59).webp | Photos-3-001/unnamed (59).webp | marca Shell domina a imagem e pode criar associacao indevida com terceiro | alta | nao recomendada para publicacao | nao usar no site; a edicao removeria o elemento principal da foto | nao recomendado | manter apenas como arquivo interno, sem apagar o original |
| 069 | unnamed (62).webp | Photos-3-001/unnamed (62).webp | viaturas policiais e marcas oficiais em contexto sensivel de seguranca publica | alta | nao recomendada para publicacao | nao usar em paginas publicas; evitar associacao institucional ou exposicao sensivel | nao recomendado | manter apenas como arquivo interno, sem apagar o original |

## Duplicidades E Quase Duplicidades

- Duplicatas exatas: nenhuma por SHA-256.
- Alertas de hash visual: `Photos-3-001/unnamed (58).webp` x `Photos-3-001/unnamed (66).webp` (distancia 5). O par #065 x #073 foi revisado visualmente e nao e duplicidade: #065 mostra trator vermelho, #073 mostra SUV/crossover cinza em via expressa.
- Imagens quase identicas confirmadas: nenhuma.
- Sequencias do mesmo atendimento: #005/#017/#058 (sedan vermelho), #012/#023 (SUV branco de grande porte), #020/#059 (barco colorido), #030/#046 (hatch vermelho).
- Imagens visualmente semelhantes, mas uteis: #022/#036/#044/#062 (motos em plataforma), #002/#031/#048 (cargas metalicas/fixacao), varias caminhonetes/SUVs em plataforma (#014/#018/#023/#064/#073/#079).
- Imagens que nao devem receber nomes ou posicoes redundantes: sequencias acima devem usar descritores de cena como `embarque`, `plataforma`, `veiculo-transportado`, `fixacao`, `rodovia`, `oficina` ou `atendimento-noturno`.

## Reavaliacao Das Candidatas A HERO

| ranking | numero | arquivo | vantagens tecnicas | limitacoes | avaliacao de uso |
| --- | --- | --- | --- | --- | --- |
| 1 | #064 | Photos-3-001/unnamed (57).webp | horizontal 677x510, picape e plataforma bem visiveis, identidade Marcus presente, boa nitidez e recorte util para desktop | pouco espaco negativo real; mobile exigira recorte cuidadoso | melhor candidata geral para hero de caminhonetes/SUVs e scroll motion simples |
| 2 | #029 | Photos-3-001/unnamed (22).webp | horizontal, sedan preto bem enquadrado, boa nitidez, servico claro e sem dado sensivel relevante | fundo residencial e pouco espaco livre para texto | melhor hero para pagina de carros, com overlay discreto ou crop lateral |
| 3 | #023 | Photos-3-001/unnamed (16).webp | proporcao ampla 680x382, SUV branco e caminhao visiveis, boa leitura de frota | data/marca d'agua no canto e altura menor dificultam mobile | boa opcao secundaria de hero para caminhonetes/SUVs |
| 4 | #014 | Photos-3-001/unnamed (7).webp | horizontal, mostra embarque/operacao, boa sensacao de servico real | marca d'agua, fundo menos limpo e pouco espaco negativo | boa para bloco interno ou hero secundario, nao a primeira escolha |
| 5 | #022 | Photos-3-001/unnamed (15).webp | horizontal, motos e caminhao claros, identidade da Marcus visivel | cena mais escura/ocupada, pouco espaco para texto e recorte mobile menos favoravel | melhor hero especifico para motos, mas inferior tecnicamente aos de carros/caminhonetes |

## Validacao Dos Nomes Propostos

- Nomes propostos unicos: sim.
- Extensoes originais preservadas: sim.
- Sequencia numerica: correta por slug/conteudo principal, mas nao estritamente por categoria. Antes da renomeacao em massa, vale decidir se a sequencia deve ser por categoria ou por cena/slug.
- Categoria de servico: em geral coerente, com ressalvas para `07_UTILITARIOS` ausente, para algumas maquinas com confianca media e para a categoria `02_HERO`, que desloca imagens de suas paginas de servico para uma categoria editorial.
- Bairro/cidade: nenhum bairro foi inventado. `fortaleza-ce` aparece como contexto SEO do projeto; isso e adequado como estrategia regional, mas nao significa que cada foto comprove visualmente Fortaleza.
- Tamanho dos nomes e keyword stuffing: aceitavel; os nomes nao sao excessivamente longos e nao repetem palavras-chave de forma artificial.
- Diferenciacao por cena: ponto a melhorar. Muitas imagens de carros, motos e caminhonetes mudam apenas a numeracao. Para organizacao e SEO, recomenda-se inserir descritores quando a cena for clara.

### Exemplos De Refinamento Recomendado

| numero | nome atual proposto | sugestao mais descritiva |
| --- | --- | --- |
| #005 | marcus-reboque-guincho-carro-fortaleza-ce-02.jpg | marcus-reboque-guincho-carro-sedan-vermelho-plataforma-fortaleza-ce-01.jpg |
| #017 | marcus-reboque-guincho-carro-fortaleza-ce-04.webp | marcus-reboque-guincho-carro-sedan-vermelho-logo-plataforma-fortaleza-ce-02.webp |
| #022 | marcus-reboque-hero-guincho-moto-fortaleza-ce-01.webp | marcus-reboque-guincho-moto-plataforma-fortaleza-ce-01.webp |
| #024 | marcus-reboque-transporte-empilhadeira-fortaleza-ce-01.webp | marcus-reboque-transporte-empilhadeira-embarque-fortaleza-ce-01.webp |
| #031 | marcus-reboque-transporte-pequenas-cargas-fortaleza-ce-02.webp | marcus-reboque-transporte-pequenas-cargas-perfis-metalicos-fortaleza-ce-01.webp |
| #048 | marcus-reboque-equipamentos-fixacao-fortaleza-ce-02.webp | marcus-reboque-fixacao-carga-metalica-plataforma-fortaleza-ce-01.webp |
| #054 | marcus-reboque-atendimento-noturno-fortaleza-ce-01.webp | marcus-reboque-atendimento-noturno-equipe-plataforma-fortaleza-ce-01.webp |
| #064 | marcus-reboque-hero-guincho-caminhonete-fortaleza-ce-03.webp | marcus-reboque-hero-guincho-caminhonete-picape-plataforma-fortaleza-ce-01.webp |

## Resumo Final

- Diferenca 82 versus 83: ha 82 imagens no lote `Photos-3-001` e 1 logotipo PNG adicional na raiz (`logotipo-520x520.png`).
- Explicacao das 15 paginas: as 12 paginas do briefing foram somadas a 3 paginas operacionais: auto socorro 24 horas, transporte emergencial e transporte programado.
- Paginas com cobertura FORTE: motos e motocicletas; carros; caminhonetes; vans; veiculos especiais; maquinas agricolas; veiculos antigos; pequenas cargas; transporte programado.
- Paginas com cobertura SUFICIENTE: barcos; pequenos caminhoes; auto socorro 24 horas; transporte emergencial.
- Paginas com cobertura FRACA: empilhadeiras.
- Paginas com cobertura AUSENTE: utilitarios, considerando apenas imagens dedicadas a `07_UTILITARIOS`.
- Imagens inadequadas: #045 recuperavel apenas com validacao/edicao; #066 e #069 nao recomendadas para publicacao.
- Duplicidades encontradas: nenhuma duplicata exata e nenhuma imagem visualmente identica confirmada; ha sequencias do mesmo atendimento que devem receber nomes distintos.
- Melhor candidata a HERO: #064 (`Photos-3-001/unnamed (57).webp`).
- Quantidade de arquivos seguros para renomeacao quanto a categoria/confianca/publicacao: 69 de 83.
- Quantidade que deve permanecer pendente antes de renomeacao/publicacao: 14 arquivos (#003, #009, #016, #038, #043, #045, #051, #053, #056, #062, #066, #067, #069, #074).
- Confirmacao: nenhuma imagem foi alterada, movida, renomeada, convertida ou excluida nesta auditoria.
