import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExportarLinhas {
  linhas: any = [
      {
          "numeroLinha": "101",
          "nomeLinha": "AGLOMERADO SANTA LUCIA"
      },
      {
          "numeroLinha": "102",
          "nomeLinha": "NOSSA SENHORA DE FATIMA/HOSPITAL EVANGELICO"
      },
      {
          "numeroLinha": "103",
          "nomeLinha": "VILA CAFEZAL/RUA POUSO ALTO"
      },
      {
          "numeroLinha": "1030",
          "nomeLinha": "AVENIDA"
      },
      {
          "numeroLinha": "104",
          "nomeLinha": "ESTACAO LAGOINHA / AVENIDA"
      },
      {
          "numeroLinha": "105",
          "nomeLinha": "ESTACAO CENTRAL / LOURDES"
      },
      {
          "numeroLinha": "107",
          "nomeLinha": "VILA MARCOLA / RUA DO OURO"
      },
      {
          "numeroLinha": "108",
          "nomeLinha": "TERMINAL BERNARDO MONTEIRO / HOSPITAIS"
      },
      {
          "numeroLinha": "1145",
          "nomeLinha": "BAIRRO DAS INDUSTRIAS"
      },
      {
          "numeroLinha": "1170",
          "nomeLinha": "SANTA LUCIA/MANGABEIRAS"
      },
      {
          "numeroLinha": "1207A",
          "nomeLinha": "BETANIA/SANTA MONICA"
      },
      {
          "numeroLinha": "1207B",
          "nomeLinha": "CONJUNTO BETANIA/SANTA MONICA"
      },
      {
          "numeroLinha": "1207C",
          "nomeLinha": "BAIRRO DAS INDUSTRIAS - 4A SECAO/SANTA MONICA"
      },
      {
          "numeroLinha": "1404A",
          "nomeLinha": "PALMEIRAS / ALIPIO DE MELO"
      },
      {
          "numeroLinha": "1404B",
          "nomeLinha": "ESTRELA DO ORIENTE / JARDIM INCONFIDENCIA"
      },
      {
          "numeroLinha": "1404C",
          "nomeLinha": "PALMEIRAS / SAO SALVADOR"
      },
      {
          "numeroLinha": "1502",
          "nomeLinha": "VISTA ALEGRE / GUARANI"
      },
      {
          "numeroLinha": "1505",
          "nomeLinha": "ALTO DOS PINHEIROS/TUPI"
      },
      {
          "numeroLinha": "1505R",
          "nomeLinha": "CONJUNTO FELICIDADE / CENTRO"
      },
      {
          "numeroLinha": "1509",
          "nomeLinha": "CALIFORNIA/TUPI"
      },
      {
          "numeroLinha": "1510",
          "nomeLinha": "MADRE GERTRUDES/PROVIDENCIA"
      },
      {
          "numeroLinha": "2004",
          "nomeLinha": "BANDEIRANTES/PILAR VIA OLHOS D'AGUA"
      },
      {
          "numeroLinha": "201",
          "nomeLinha": "MORRO DAS PEDRAS"
      },
      {
          "numeroLinha": "202",
          "nomeLinha": "ESTACAO VILA OESTE"
      },
      {
          "numeroLinha": "203",
          "nomeLinha": "MORRO DAS PEDRAS/VENTOSA"
      },
      {
          "numeroLinha": "2033",
          "nomeLinha": "BETÂNIA/CENTRO"
      },
      {
          "numeroLinha": "2034",
          "nomeLinha": "CONJUNTO BETÂNIA/CENTRO"
      },
      {
          "numeroLinha": "2035",
          "nomeLinha": "BAIRRO DAS INDÚSTRIAS/CENTRO"
      },
      {
          "numeroLinha": "204",
          "nomeLinha": "ESTACAO VILA OESTE / NOVA GAMELEIRA"
      },
      {
          "numeroLinha": "205",
          "nomeLinha": "METRO CALAFATE/BURITIS"
      },
      {
          "numeroLinha": "206",
          "nomeLinha": "CIRCULAR OESTE"
      },
      {
          "numeroLinha": "2101",
          "nomeLinha": "GRAJAU/SION"
      },
      {
          "numeroLinha": "2102",
          "nomeLinha": "GAMELEIRA / SERRA"
      },
      {
          "numeroLinha": "2103",
          "nomeLinha": "PRADO/ANCHIETA"
      },
      {
          "numeroLinha": "2104",
          "nomeLinha": "NOVA GAMELEIRA/BH SHOPPING"
      },
      {
          "numeroLinha": "2150",
          "nomeLinha": "GRAJAU/SION VIA CONTORNO"
      },
      {
          "numeroLinha": "2151",
          "nomeLinha": "VISTA ALEGRE/SERRA"
      },
      {
          "numeroLinha": "2152",
          "nomeLinha": "SALGADO FILHO/CRUZEIRO"
      },
      {
          "numeroLinha": "2207",
          "nomeLinha": "SERRA VERDE"
      },
      {
          "numeroLinha": "2208B",
          "nomeLinha": "JARDIM EUROPA"
      },
      {
          "numeroLinha": "2210A",
          "nomeLinha": "RIO BRANCO"
      },
      {
          "numeroLinha": "2210B",
          "nomeLinha": "JARDIM LEBLON VIA RIO BRANCO"
      },
      {
          "numeroLinha": "2210C",
          "nomeLinha": "PIRATININGA VIA RIO BRANCO"
      },
      {
          "numeroLinha": "2211A",
          "nomeLinha": "CAMPO ALEGRE"
      },
      {
          "numeroLinha": "2211B",
          "nomeLinha": "PLANALTO"
      },
      {
          "numeroLinha": "2212A",
          "nomeLinha": "JARDIM ATLANTICO"
      },
      {
          "numeroLinha": "2212B",
          "nomeLinha": "JARDIM LEBLON"
      },
      {
          "numeroLinha": "2212C",
          "nomeLinha": "COPACABANA VIA MONTE CARMELO"
      },
      {
          "numeroLinha": "2213",
          "nomeLinha": "TREVO VIA GARCAS"
      },
      {
          "numeroLinha": "2214",
          "nomeLinha": "FLORAMAR"
      },
      {
          "numeroLinha": "2214Z",
          "nomeLinha": "FLORAMAR/ZOOLOGICO"
      },
      {
          "numeroLinha": "2215A",
          "nomeLinha": "CEU AZUL A"
      },
      {
          "numeroLinha": "2215B",
          "nomeLinha": "CEU AZUL B"
      },
      {
          "numeroLinha": "2215C",
          "nomeLinha": "CEU AZUL C"
      },
      {
          "numeroLinha": "2215D",
          "nomeLinha": "CEU AZUL D"
      },
      {
          "numeroLinha": "2216",
          "nomeLinha": "SANTA BRANCA"
      },
      {
          "numeroLinha": "2224A",
          "nomeLinha": "JARDIM DOS COMERCIARIOS A"
      },
      {
          "numeroLinha": "2224C",
          "nomeLinha": "JARDIM DOS COMERCIARIOS C"
      },
      {
          "numeroLinha": "2234A",
          "nomeLinha": "JAQUELINE A"
      },
      {
          "numeroLinha": "2234B",
          "nomeLinha": "JAQUELINE B"
      },
      {
          "numeroLinha": "2256A",
          "nomeLinha": "SAO JOAO BATISTA A"
      },
      {
          "numeroLinha": "2402A",
          "nomeLinha": "SAO BERNARDO/NOSSA SENHORA DA GLORIA A"
      },
      {
          "numeroLinha": "30",
          "nomeLinha": "ESTACAO DIAMANTE/CENTRO"
      },
      {
          "numeroLinha": "301",
          "nomeLinha": "ESTACAO DIAMANTE / SOLAR VIA BRASIL INDUSTRIAL"
      },
      {
          "numeroLinha": "302",
          "nomeLinha": "ESTACAO DIAMANTE / VILA PINHO"
      },
      {
          "numeroLinha": "3029",
          "nomeLinha": "REGINA/CENTRO"
      },
      {
          "numeroLinha": "303",
          "nomeLinha": "ESTACAO DIAMANTE / SANTA CECILIA VIA CASTANHEIRAS"
      },
      {
          "numeroLinha": "3030",
          "nomeLinha": "PILAR-OLHOS D AGUA / CENTRO"
      },
      {
          "numeroLinha": "304",
          "nomeLinha": "ESTACAO DIAMANTE / JATOBA IV"
      },
      {
          "numeroLinha": "305",
          "nomeLinha": "ESTACAO DIAMANTE / MANGUEIRAS"
      },
      {
          "numeroLinha": "3050",
          "nomeLinha": "ESTACAO DIAMANTE/HOSPITAIS VIA BH SHOPPING"
      },
      {
          "numeroLinha": "3051",
          "nomeLinha": "FLAVIO MARQUES LISBOA / SAVASSI VIA N.S.CARMO"
      },
      {
          "numeroLinha": "3052",
          "nomeLinha": "ESTACAO DIAMANTE/BH SHOPPING-VIA HAVAI"
      },
      {
          "numeroLinha": "3053",
          "nomeLinha": "ESTACAO BARREIRO/B.PRETO"
      },
      {
          "numeroLinha": "3054",
          "nomeLinha": "MILIONARIOS/CENTRO"
      },
      {
          "numeroLinha": "3055",
          "nomeLinha": "ESTACAO BARREIRO/SAVASSI VIA BHSHOPPING"
      },
      {
          "numeroLinha": "308",
          "nomeLinha": "ESTACAO DIAMANTE / TIROL"
      },
      {
          "numeroLinha": "309",
          "nomeLinha": "ESTACAO DIAMANTE / BAIRRO PETROPOLIS"
      },
      {
          "numeroLinha": "310",
          "nomeLinha": "ESTACAO DIAMANTE / 3 E 4 SECAO"
      },
      {
          "numeroLinha": "311",
          "nomeLinha": "ESTACAO DIAMANTE / INDEPENDENCIA"
      },
      {
          "numeroLinha": "313",
          "nomeLinha": "ESTACAO DIAMANTE / OLARIA"
      },
      {
          "numeroLinha": "314",
          "nomeLinha": "ESTACAO DIAMANTE/ESTACAO BARREIRO VIA SANTA HELENA"
      },
      {
          "numeroLinha": "315",
          "nomeLinha": "ESTACAO BARREIRO / BARREIRO"
      },
      {
          "numeroLinha": "3150",
          "nomeLinha": "REGINA-LINDÉIA/BH SHOPPING VIA ANEL RODOVIÁRIO"
      },
      {
          "numeroLinha": "316",
          "nomeLinha": "CIRCULAR SAUDE A"
      },
      {
          "numeroLinha": "317",
          "nomeLinha": "CIRCULAR SAUDE B"
      },
      {
          "numeroLinha": "318",
          "nomeLinha": "ESTACAO BARREIRO/JARDIM LIBERDADE VIA MILIONARIOS"
      },
      {
          "numeroLinha": "319",
          "nomeLinha": "VILA CEMIG/CONJ.ESPERANCA"
      },
      {
          "numeroLinha": "32",
          "nomeLinha": "ESTACAO BARREIRO/CENTRO-TAMOIOS"
      },
      {
          "numeroLinha": "320",
          "nomeLinha": "ESCOLA ESTADUAL AMARO NEVES"
      },
      {
          "numeroLinha": "321",
          "nomeLinha": "OLHOS D AGUA / PILAR"
      },
      {
          "numeroLinha": "325",
          "nomeLinha": "ESTACAO BARREIRO / FLAVIO MARQUES LISBOA"
      },
      {
          "numeroLinha": "326",
          "nomeLinha": "ESTACAO BARREIRO / VALE DO JATOBA"
      },
      {
          "numeroLinha": "327",
          "nomeLinha": "ESTACAO BARREIRO / CARDOSO A"
      },
      {
          "numeroLinha": "328",
          "nomeLinha": "ESTACAO BARREIRO / CARDOSO B"
      },
      {
          "numeroLinha": "329",
          "nomeLinha": "ESTACAO BARREIRO / JATOBA"
      },
      {
          "numeroLinha": "33",
          "nomeLinha": "ESTACAO BARREIRO/CENTRO-HOSPITAIS"
      },
      {
          "numeroLinha": "330",
          "nomeLinha": "ESTACAO BARREIRO / INDEPENDENCIA"
      },
      {
          "numeroLinha": "3301A",
          "nomeLinha": "SANTA TEREZINHA"
      },
      {
          "numeroLinha": "3301B",
          "nomeLinha": "CASTELO"
      },
      {
          "numeroLinha": "3302A",
          "nomeLinha": "NOVA PAMPULHA VIA ITAMARATI"
      },
      {
          "numeroLinha": "3302B",
          "nomeLinha": "XANGRILA VIA ITAMARATI"
      },
      {
          "numeroLinha": "3302D",
          "nomeLinha": "BRAUNAS"
      },
      {
          "numeroLinha": "331",
          "nomeLinha": "ESTACAO BARREIRO / CONJ.ANTONIO TEIXEIRA DIAS"
      },
      {
          "numeroLinha": "332",
          "nomeLinha": "ESTACAO BARREIRO / MILIONARIOS"
      },
      {
          "numeroLinha": "333",
          "nomeLinha": "ESTACAO BARREIRO / BONSUCESSO VIA MILIONARIOS"
      },
      {
          "numeroLinha": "335",
          "nomeLinha": "ESTACAO BARREIRO / LINDEIA"
      },
      {
          "numeroLinha": "3350",
          "nomeLinha": "EST.BARREIRO/EST.DIAMANTE"
      },
      {
          "numeroLinha": "336",
          "nomeLinha": "HOSPITAL EDUARDO DE MENEZES / VILA BERNADETE"
      },
      {
          "numeroLinha": "337",
          "nomeLinha": "ESTAÇÃO BARREIRO/ITAIPÚ"
      },
      {
          "numeroLinha": "34",
          "nomeLinha": "ESTACAO BARREIRO/VIA EXPRESSA"
      },
      {
          "numeroLinha": "340",
          "nomeLinha": "ESTAÇÃO BARREIRO/VILA MANGUEIRAS"
      },
      {
          "numeroLinha": "341",
          "nomeLinha": "ESTAÇÃO BARREIRO/ESTAÇÃO DIAMANTE/VIA SAÚDE"
      },
      {
          "numeroLinha": "342",
          "nomeLinha": "ESTAÇÃO BARREIRO/SOLAR VIA ESTAÇÃO DIAMANTE"
      },
      {
          "numeroLinha": "35",
          "nomeLinha": "ESTACAO BARREIRO/CENTRO-VIA SANTOS DUMONT"
      },
      {
          "numeroLinha": "3501A",
          "nomeLinha": "JARDIM ALVORADA/SAO MARCOS"
      },
      {
          "numeroLinha": "3501B",
          "nomeLinha": "OURO PRETO 3A GLEBA/BAIRRO IPE VIA JD. MONTANHES"
      },
      {
          "numeroLinha": "3502",
          "nomeLinha": "OURO PRETO/SAO GABRIEL"
      },
      {
          "numeroLinha": "3503A",
          "nomeLinha": "SANTA TEREZINHA/SAO GABRIEL"
      },
      {
          "numeroLinha": "401",
          "nomeLinha": "METRO CID.INDUSTRIAL/S.MARIA"
      },
      {
          "numeroLinha": "402",
          "nomeLinha": "METRO CID.INDUSTRIAL/CAMARGOS"
      },
      {
          "numeroLinha": "4031",
          "nomeLinha": "SANTA MARIA / HOSPITAIS"
      },
      {
          "numeroLinha": "4032",
          "nomeLinha": "CAICARA /SAVASSI/ PCA. DA LIBERDADE"
      },
      {
          "numeroLinha": "4033",
          "nomeLinha": "CAMARGOS/CENTRO"
      },
      {
          "numeroLinha": "4034",
          "nomeLinha": "NOVO DOM BOSCO / SAVASSI VIA PADRE EUSTAQUIO"
      },
      {
          "numeroLinha": "404",
          "nomeLinha": "JARDIM ALVORADA/AV.DOM PEDRO II"
      },
      {
          "numeroLinha": "4102",
          "nomeLinha": "APARECIDA/SERRA"
      },
      {
          "numeroLinha": "4103",
          "nomeLinha": "APARECIDA/MANGABEIRAS"
      },
      {
          "numeroLinha": "4106",
          "nomeLinha": "SAO CRISTOVAO/SANTO ANTONIO"
      },
      {
          "numeroLinha": "4107",
          "nomeLinha": "ALTO CAICARA/SERRA"
      },
      {
          "numeroLinha": "4108",
          "nomeLinha": "PEDRO II/MANGABEIRAS"
      },
      {
          "numeroLinha": "4110",
          "nomeLinha": "DOM CABRAL/BELVEDERE"
      },
      {
          "numeroLinha": "4111",
          "nomeLinha": "DOM CABRAL/ANCHIETA"
      },
      {
          "numeroLinha": "4113",
          "nomeLinha": "BOM JESUS/BELVEDERE"
      },
      {
          "numeroLinha": "4114",
          "nomeLinha": "BONFIM / CENTRO"
      },
      {
          "numeroLinha": "4150",
          "nomeLinha": "SHOPPING DEL REY/BH SHOPPING"
      },
      {
          "numeroLinha": "4201",
          "nomeLinha": "ALTO CAICARA/NOVA CINTRA"
      },
      {
          "numeroLinha": "4205",
          "nomeLinha": "ERMELINDA/SALGADO FILHO"
      },
      {
          "numeroLinha": "4403A",
          "nomeLinha": "ZOOLOGICO VIA SERRANO"
      },
      {
          "numeroLinha": "4403C",
          "nomeLinha": "RESIDENCIAL SARANDI"
      },
      {
          "numeroLinha": "4403D",
          "nomeLinha": "URCA-CONFISCO"
      },
      {
          "numeroLinha": "4405",
          "nomeLinha": "COQUEIROS"
      },
      {
          "numeroLinha": "4410",
          "nomeLinha": "CELSO MACHADO VIA SARAMENHA/URCA"
      },
      {
          "numeroLinha": "4501",
          "nomeLinha": "CALIFORNIA II / SAO PAULO"
      },
      {
          "numeroLinha": "4801A",
          "nomeLinha": "JARDIM FILADELFIA/BOA VISTA A"
      },
      {
          "numeroLinha": "4802A",
          "nomeLinha": "PINDORAMA/BOA VISTA"
      },
      {
          "numeroLinha": "50",
          "nomeLinha": "ESTAÇÃO PAMPULHA/CENTRO - DIRETA"
      },
      {
          "numeroLinha": "503",
          "nomeLinha": "SANTA ROSA/APARECIDA/SAO LUIS"
      },
      {
          "numeroLinha": "5031",
          "nomeLinha": "SUZANA/SAVASSI-VIA UNIVERSITARIO"
      },
      {
          "numeroLinha": "504",
          "nomeLinha": "SANTA ROSA/APARECIDA/SAO LUIS"
      },
      {
          "numeroLinha": "505",
          "nomeLinha": "CIRCULAR LAGOA DA PAMPULHA"
      },
      {
          "numeroLinha": "510",
          "nomeLinha": "ESTAÇÃO PAMPULHA/TREVO VIA GARÇAS"
      },
      {
          "numeroLinha": "5101",
          "nomeLinha": "SUZANA/CRUZEIRO"
      },
      {
          "numeroLinha": "5102",
          "nomeLinha": "UFMG/SANTO ANTONIO"
      },
      {
          "numeroLinha": "5201",
          "nomeLinha": "DONA CLARA/BURITIS"
      },
      {
          "numeroLinha": "5201-2",
          "nomeLinha": "DONA CLARA/BURITIS"
      },
      {
          "numeroLinha": "5250",
          "nomeLinha": "ESTAÇÃO PAMPULHA/BETÂNIA"
      },
      {
          "numeroLinha": "5401",
          "nomeLinha": "SAO LUIS/DOM CABRAL"
      },
      {
          "numeroLinha": "5502A",
          "nomeLinha": "JARDIM VITORIA A"
      },
      {
          "numeroLinha": "5502B",
          "nomeLinha": "CAPITAO EDUARDO"
      },
      {
          "numeroLinha": "5502C",
          "nomeLinha": "POUSADA SANTO ANTONIO"
      },
      {
          "numeroLinha": "5503A",
          "nomeLinha": "GOIANIA A"
      },
      {
          "numeroLinha": "5503B",
          "nomeLinha": "GOIANIA B"
      },
      {
          "numeroLinha": "5506A",
          "nomeLinha": "RIBEIRO DE ABREU"
      },
      {
          "numeroLinha": "5506B",
          "nomeLinha": "RIBEIRO DE ABREU VIA CONJUNTO"
      },
      {
          "numeroLinha": "5506C",
          "nomeLinha": "PAULO VI VIA RIBEIRO DE ABREU"
      },
      {
          "numeroLinha": "5507A",
          "nomeLinha": "JARDIM GUANABARA A"
      },
      {
          "numeroLinha": "5508",
          "nomeLinha": "AARAO REIS VIA MINASLANDIA"
      },
      {
          "numeroLinha": "5513",
          "nomeLinha": "JULIANA VIA ETELVINA CARNEIRO"
      },
      {
          "numeroLinha": "5517",
          "nomeLinha": "MINAS CAIXA VIA SERRA VERDE"
      },
      {
          "numeroLinha": "5523A",
          "nomeLinha": "CONJUNTO PAULO VI"
      },
      {
          "numeroLinha": "5534",
          "nomeLinha": "CONJUNTO ZILAH SPOSITO"
      },
      {
          "numeroLinha": "60",
          "nomeLinha": "VENDA NOVA/CENTRO"
      },
      {
          "numeroLinha": "601",
          "nomeLinha": "NOVA YORK / JULIANA"
      },
      {
          "numeroLinha": "6024",
          "nomeLinha": "MARIA HELENA / CENTRO COM RETORNO EXPRESSO"
      },
      {
          "numeroLinha": "6025",
          "nomeLinha": "MARIA HELENA / CENTRO COM RETORNO EXPRESSO"
      },
      {
          "numeroLinha": "6027",
          "nomeLinha": "MANTIQUEIRA / CENTRO COM RETORNO EXPRESSO"
      },
      {
          "numeroLinha": "607",
          "nomeLinha": "ESPLENDOR/JAQUELINE"
      },
      {
          "numeroLinha": "608",
          "nomeLinha": "NOVA PAMPULHA/VENDA NOVA"
      },
      {
          "numeroLinha": "609",
          "nomeLinha": "SERRA VERDE/SANTA MONICA"
      },
      {
          "numeroLinha": "61",
          "nomeLinha": "ESTACAO VENDA NOVA/CENTRO-DIRETA"
      },
      {
          "numeroLinha": "614",
          "nomeLinha": "ESTAÇÃO PAMPULHA / CÉU AZUL A"
      },
      {
          "numeroLinha": "618",
          "nomeLinha": "ESTAÇÃO PAMPULHA/JARDIM LEBLON"
      },
      {
          "numeroLinha": "619",
          "nomeLinha": "ESTAÇÃO PAMPULHA / SANTA MÔNICA VIA SANTA BRANCA"
      },
      {
          "numeroLinha": "62",
          "nomeLinha": "ESTACAO VENDA NOVA/SAVASSI VIA HOSPITAIS"
      },
      {
          "numeroLinha": "621",
          "nomeLinha": "ESTACAO VENDA NOVA / LAGOA"
      },
      {
          "numeroLinha": "622",
          "nomeLinha": "ESTACAO VENDA NOVA / LAGOINHA"
      },
      {
          "numeroLinha": "623",
          "nomeLinha": "ESTACAO VENDA NOVA / VILA SANTA BRANCA"
      },
      {
          "numeroLinha": "624",
          "nomeLinha": "ESTACAO VENDA NOVA / MARIA HELENA A"
      },
      {
          "numeroLinha": "625",
          "nomeLinha": "ESTACAO VENDA NOVA / MARIA HELENA B"
      },
      {
          "numeroLinha": "626",
          "nomeLinha": "ESPLENDOR VIA NOVA AMERICA / ESTACAO VENDA NOVA"
      },
      {
          "numeroLinha": "627",
          "nomeLinha": "MANTIQUEIRA / ESTACAO VENDA NOVA"
      },
      {
          "numeroLinha": "63",
          "nomeLinha": "ESTACAO VENDA NOVA/SAO CRISTOVAO"
      },
      {
          "numeroLinha": "630",
          "nomeLinha": "ESTACAO VENDA NOVA / SERRA VERDE V. AV. SALAMANCA"
      },
      {
          "numeroLinha": "631",
          "nomeLinha": "ESTACAO VENDA NOVA / SERRA VERDE V. MINAS CAIXA"
      },
      {
          "numeroLinha": "633",
          "nomeLinha": "JARDIM DOS COMERCIARIOS/ESTACAO VENDA NOVA"
      },
      {
          "numeroLinha": "634",
          "nomeLinha": "NOVA YORK/EST.VENDA NOVA VIA JD.DOS COMERCIARIOS A"
      },
      {
          "numeroLinha": "635",
          "nomeLinha": "ESTACAO VENDA NOVA / JARDIM DOS COMERCIARIOS C"
      },
      {
          "numeroLinha": "6350",
          "nomeLinha": "EST.VILARINHO/EST.BARREIRO VIA ANEL RODOVIARIO"
      },
      {
          "numeroLinha": "636",
          "nomeLinha": "ESTACAO VENDA NOVA / JARDIM EUROPA"
      },
      {
          "numeroLinha": "637",
          "nomeLinha": "CANAA / ESTACAO VILARINHO VIA SERRA VERDE"
      },
      {
          "numeroLinha": "64",
          "nomeLinha": "ESTACAO VENDA NOVA/SANTO AGOSTINHO V.CARLOS LUZ"
      },
      {
          "numeroLinha": "640",
          "nomeLinha": "ESTACAO VENDA NOVA / JARDIM LEBLON VIA RIO BRANCO"
      },
      {
          "numeroLinha": "644",
          "nomeLinha": "ESTAÇÃO PAMPULHA/SÃO JOÃO BATISTA"
      },
      {
          "numeroLinha": "65",
          "nomeLinha": "ESTAÇÃO VILARINHO/CENTRO VIA ANTONIO CARLOS-DIRETA"
      },
      {
          "numeroLinha": "702",
          "nomeLinha": "XODO-MARIZE/ESTACAO MINAS SHOPPING"
      },
      {
          "numeroLinha": "703",
          "nomeLinha": "GUARANI / ESTACAO SAO GABRIEL"
      },
      {
          "numeroLinha": "705",
          "nomeLinha": "ESTACAO SAO GABRIEL/SAO TOMAZ"
      },
      {
          "numeroLinha": "706",
          "nomeLinha": "ESTACAO SAO GABRIEL/ HELIOPOLIS"
      },
      {
          "numeroLinha": "707",
          "nomeLinha": "ESTACAO SAO GABRIEL/JARDIM GUANABARA"
      },
      {
          "numeroLinha": "708",
          "nomeLinha": "ESTACAO SAO GABRIEL/FELICIDADE"
      },
      {
          "numeroLinha": "711",
          "nomeLinha": "ESTACAO SAO GABRIEL/SOLIMOES"
      },
      {
          "numeroLinha": "713",
          "nomeLinha": "ESTACAO SAO GABRIEL/LAJEDO"
      },
      {
          "numeroLinha": "714",
          "nomeLinha": "ESTACAO SAO GABRIEL/CASAS POPULARES"
      },
      {
          "numeroLinha": "715",
          "nomeLinha": "ESTACAO SAO GABRIEL/MONTE AZUL"
      },
      {
          "numeroLinha": "716",
          "nomeLinha": "ESTACAO SAO GABRIEL/NOVO AARAO REIS"
      },
      {
          "numeroLinha": "737",
          "nomeLinha": "ESTAÇÃO VILARINHO/JAQUELINE"
      },
      {
          "numeroLinha": "739",
          "nomeLinha": "EST. VILARINHO/JAQUELINE 2ª SEÇÃO VIA FREI LEOPOLD"
      },
      {
          "numeroLinha": "80",
          "nomeLinha": "ESTACAO SAO GABRIEL/AV.CRISTIANO MACHADO"
      },
      {
          "numeroLinha": "8001A",
          "nomeLinha": "SANTA INES/BH SHOPPING"
      },
      {
          "numeroLinha": "806",
          "nomeLinha": "ESTACAO SAO GABRIEL / VISTA DO SOL VIA NAZARE"
      },
      {
          "numeroLinha": "807",
          "nomeLinha": "ESTACAO SAO GABRIEL / RIBEIRO DE ABREU"
      },
      {
          "numeroLinha": "808",
          "nomeLinha": "ESTACAO SAO GABRIEL / PAULO VI"
      },
      {
          "numeroLinha": "809",
          "nomeLinha": "ESTACAO SAO GABRIEL / BELMONTE"
      },
      {
          "numeroLinha": "810",
          "nomeLinha": "ESTACAO SAO GABRIEL/PARQUE BELMONTE VIA D.SILVERIO"
      },
      {
          "numeroLinha": "8101",
          "nomeLinha": "SANTA CRUZ/ALTO SANTA LUCIA"
      },
      {
          "numeroLinha": "8102",
          "nomeLinha": "UNIAO/CARMO SION"
      },
      {
          "numeroLinha": "8103",
          "nomeLinha": "NOVA FLORESTA/SANTA LUCIA"
      },
      {
          "numeroLinha": "8106",
          "nomeLinha": "SANTA CRUZ/BH SHOPPING VIA BELVEDERE"
      },
      {
          "numeroLinha": "8107",
          "nomeLinha": "CONCORDIA/SAO PEDRO"
      },
      {
          "numeroLinha": "8108",
          "nomeLinha": "CIDADE NOVA/SAVASSI"
      },
      {
          "numeroLinha": "811",
          "nomeLinha": "ESTACAO SAO GABRIEL / VISTA DO SOL VIA PUC"
      },
      {
          "numeroLinha": "813",
          "nomeLinha": "ESTACAO SAO GABRIEL/PAULO VI VIA RIBEIRO DE ABREU"
      },
      {
          "numeroLinha": "8150",
          "nomeLinha": "UNIAO/SERRA"
      },
      {
          "numeroLinha": "8151",
          "nomeLinha": "EST. SAO GABRIEL/BH SHOPPING VIA ANEL RODOVIARIO"
      },
      {
          "numeroLinha": "82",
          "nomeLinha": "ESTAÇÃO SÃO GABRIEL/SAVASSI VIA HOSPITAIS"
      },
      {
          "numeroLinha": "8203",
          "nomeLinha": "RENASCENCA/BURITIS"
      },
      {
          "numeroLinha": "8205",
          "nomeLinha": "MARIA GORETTI/NOVA GRANADA VIA ALTO BARROCA"
      },
      {
          "numeroLinha": "8207",
          "nomeLinha": "MARIA GORETTI/ESTRELA DALVA"
      },
      {
          "numeroLinha": "8208",
          "nomeLinha": "SANTA CRUZ / UNI-ESTORIL"
      },
      {
          "numeroLinha": "8208-2",
          "nomeLinha": "SANTA CRUZ / UNI-ESTORIL"
      },
      {
          "numeroLinha": "821",
          "nomeLinha": "ESTACAO JOSE CANDIDO / GOIANIA"
      },
      {
          "numeroLinha": "822",
          "nomeLinha": "ESTACAO JOSE CANDIDO/VILA MARIA"
      },
      {
          "numeroLinha": "8350",
          "nomeLinha": "ESTACAO SAO GABRIEL/ESTACAO BARREIRO"
      },
      {
          "numeroLinha": "83D",
          "nomeLinha": "ESTAÇÃO SÃO GABRIEL/CENTRO-DIRETA"
      },
      {
          "numeroLinha": "8401",
          "nomeLinha": "CACHOEIRINHA/SAO JOSE"
      },
      {
          "numeroLinha": "8405",
          "nomeLinha": "PALMARES/BELA VISTA"
      },
      {
          "numeroLinha": "8501",
          "nomeLinha": "MARIA GORETTI/ENGENHO NOGUEIRA VIA OURO PRETO"
      },
      {
          "numeroLinha": "901",
          "nomeLinha": "CIRCULAR LESTE"
      },
      {
          "numeroLinha": "9030",
          "nomeLinha": "CASTANHEIRAS/CENTRO"
      },
      {
          "numeroLinha": "9031",
          "nomeLinha": "NOSSA SENHORA DE FATIMA/CENTRO"
      },
      {
          "numeroLinha": "9031R",
          "nomeLinha": "NOSSA SENHORA DE FATIMA / SANTA EFIGENIA"
      },
      {
          "numeroLinha": "9032",
          "nomeLinha": "GRANJA DE FREITAS"
      },
      {
          "numeroLinha": "9101",
          "nomeLinha": "ALTO VERA CRUZ/SANTA LUCIA"
      },
      {
          "numeroLinha": "9103",
          "nomeLinha": "SANTA TERESA/SANTO ANTONIO"
      },
      {
          "numeroLinha": "9104",
          "nomeLinha": "SAGRADA FAMILIA/LUXEMBURGO"
      },
      {
          "numeroLinha": "9105",
          "nomeLinha": "NOVA VISTA/SION"
      },
      {
          "numeroLinha": "9106",
          "nomeLinha": "SAGRADA FAMILIA/SERRA"
      },
      {
          "numeroLinha": "9201",
          "nomeLinha": "BALEIA/NOVA GRANADA"
      },
      {
          "numeroLinha": "9202",
          "nomeLinha": "POMPEIA/JARDIM AMERICA"
      },
      {
          "numeroLinha": "9204",
          "nomeLinha": "SANTA EFIGENIA/ESTORIL"
      },
      {
          "numeroLinha": "9205",
          "nomeLinha": "NOVA VISTA/NOVA CINTRA"
      },
      {
          "numeroLinha": "9206",
          "nomeLinha": "VERA CRUZ/BURITIS"
      },
      {
          "numeroLinha": "9207",
          "nomeLinha": "SANTA INES/NOVA CINTRA"
      },
      {
          "numeroLinha": "9208",
          "nomeLinha": "TAQUARIL/CONJUNTO SANTA MARIA"
      },
      {
          "numeroLinha": "9209",
          "nomeLinha": "SAGRADA FAMILIA/GUTIERREZ"
      },
      {
          "numeroLinha": "9210",
          "nomeLinha": "SANTA TERESA/PRADO"
      },
      {
          "numeroLinha": "9211",
          "nomeLinha": "CAETANO FURQUIM/HAVAI"
      },
      {
          "numeroLinha": "9214",
          "nomeLinha": "CAETANO FURQUIM / HAVAI - VIA ALTO HAVAI"
      },
      {
          "numeroLinha": "9250",
          "nomeLinha": "CAETANO FURQUIM/NOVA CINTRA VIA SAVASSI"
      },
      {
          "numeroLinha": "9402",
          "nomeLinha": "SANTA INES/SANTO ANDRE"
      },
      {
          "numeroLinha": "9403",
          "nomeLinha": "PARAISO/CAICARA"
      },
      {
          "numeroLinha": "9404",
          "nomeLinha": "SAO LUCAS/NOVA ESPERANCA"
      },
      {
          "numeroLinha": "9405",
          "nomeLinha": "INSTITUTO AGRONOMICO/MONSENHOR MESSIAS"
      },
      {
          "numeroLinha": "9407",
          "nomeLinha": "ALTO VERA CRUZ/DOM BOSCO"
      },
      {
          "numeroLinha": "9408",
          "nomeLinha": "SANTA EFIGENIA/PADRE EUSTAQUIO"
      },
      {
          "numeroLinha": "9410",
          "nomeLinha": "SAGRADA FAMILIA/CORACAO EUCARISTICO"
      },
      {
          "numeroLinha": "9411",
          "nomeLinha": "CASA BRANCA/SAO JOSE"
      },
      {
          "numeroLinha": "9412",
          "nomeLinha": "CONJ.TAQUARIL/PADRE EUSTAQUIO"
      },
      {
          "numeroLinha": "9414",
          "nomeLinha": "SANTA INES/JOAO PINHEIRO"
      },
      {
          "numeroLinha": "9501",
          "nomeLinha": "SAO LUCAS/JARAGUA"
      },
      {
          "numeroLinha": "9502",
          "nomeLinha": "SAO GERALDO/SAO FRANCISCO VIA ESPLANADA"
      },
      {
          "numeroLinha": "9503",
          "nomeLinha": "TAQUARIL/JARAGUA"
      },
      {
          "numeroLinha": "9550",
          "nomeLinha": "CASA BRANCA/SAO FRANCISCO VIA EST. JOSE CANDIDO"
      },
      {
          "numeroLinha": "9801",
          "nomeLinha": "SAUDADE/SANTA CRUZ"
      },
      {
          "numeroLinha": "9803",
          "nomeLinha": "TAQUARIL/PALMARES"
      },
      {
          "numeroLinha": "9805",
          "nomeLinha": "SANTA EFIGENIA/RENASCENCA"
      },
      {
          "numeroLinha": "SC01A",
          "nomeLinha": "CONTORNO A"
      },
      {
          "numeroLinha": "SC01B",
          "nomeLinha": "CONTORNO B"
      },
      {
          "numeroLinha": "SC01R",
          "nomeLinha": "CONTORNO/PRACA MILTON CAMPOS"
      },
      {
          "numeroLinha": "SC02A",
          "nomeLinha": "PRACA 7/SAVASSI VIA PCA DA LIBERDADE - SANTA CASA"
      },
      {
          "numeroLinha": "SC02B",
          "nomeLinha": "SAVASSI/PRACA 7 VIA SANTA CASA - PCA DA LIBERDADE"
      },
      {
          "numeroLinha": "SC03A",
          "nomeLinha": "HOSPITAL FELICIO ROCHO/HOSPITAL MILITAR A"
      },
      {
          "numeroLinha": "SC03B",
          "nomeLinha": "HOSPITAL FELICIO ROCHO/HOSPITAL MILITAR B"
      },
      {
          "numeroLinha": "SC04A",
          "nomeLinha": "SANTA CASA/SAVASSI/RODOVIARIA A"
      },
      {
          "numeroLinha": "SC04B",
          "nomeLinha": "SANTA CASA/RODOVIARIA/SAVASSI B"
      },
      {
          "numeroLinha": "SE02",
          "nomeLinha": "BURITIS/SAVASSI"
      }
  ]

}
