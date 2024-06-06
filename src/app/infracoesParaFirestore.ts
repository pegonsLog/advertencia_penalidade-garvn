import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExportarInfracoes {
  infracoes: any = [
    {
      "codigoInfracao": "01000",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - acelerador - más condições"
  },
  {
      "codigoInfracao": "01001",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - alça de segurança p/ árvore transmissão - más condições "
  },
  {
      "codigoInfracao": "01002",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - alçapão - más condições"
  },
  {
      "codigoInfracao": "01003",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - assoalho - más condições  "
  },
  {
      "codigoInfracao": "01004",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - balaústre - ausência "
  },
  {
      "codigoInfracao": "01005",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - balaústre - más condições "
  },
  {
      "codigoInfracao": "01006",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - balaústre próx porta dianteira - ausência"
  },
  {
      "codigoInfracao": "01007",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - balaústre próx porta dianteira - más condições "
  },
  {
      "codigoInfracao": "01008",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - balaústre próx portas central/traseira - ausência "
  },
  {
      "codigoInfracao": "01009",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - balaústre próx portas central/traseira - más condições"
  },
  {
      "codigoInfracao": "01010",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - balaústre próx roleta - ausência "
  },
  {
      "codigoInfracao": "01011",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - balaústre próx roleta - más condições"
  },
  {
      "codigoInfracao": "01012",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - balaústre/espaço cadeira de rodas - ausência "
  },
  {
      "codigoInfracao": "01013",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - balaústre/espaço cadeira de rodas - más condições"
  },
  {
      "codigoInfracao": "01014",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - banco cobrador - más condições "
  },
  {
      "codigoInfracao": "01015",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - banco fundos/traseira - ausência"
  },
  {
      "codigoInfracao": "01016",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - banco fundos/traseira - más condições  "
  },
  {
      "codigoInfracao": "01017",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - banco lado direito - ausência "
  },
  {
      "codigoInfracao": "01018",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - banco lado direito - más condições"
  },
  {
      "codigoInfracao": "01019",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - banco lado esquerdo - ausência "
  },
  {
      "codigoInfracao": "01020",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - banco lado esquerdo - más condições "
  },
  {
      "codigoInfracao": "01021",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - banco motorista - más condições"
  },
  {
      "codigoInfracao": "01022",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - buzina - más condições "
  },
  {
      "codigoInfracao": "01023",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - caixa de marcha - más condições "
  },
  {
      "codigoInfracao": "01024",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - caixa de marcha/alavanca – más condições "
  },
  {
      "codigoInfracao": "01025",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - campainha - más condições"
  },
  {
      "codigoInfracao": "01026",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - campainha/botão balaústre - ausência "
  },
  {
      "codigoInfracao": "01027",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - campainha/botão balaústre - más condições "
  },
  {
      "codigoInfracao": "01028",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - campainha/cordão - ausência "
  },
  {
      "codigoInfracao": "01029",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - campainha/cordão - más condições "
  },
  {
      "codigoInfracao": "01030",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - campainha/sinal luminoso - ausência  "
  },
  {
      "codigoInfracao": "01031",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - campainha/sinal luminoso - más condições"
  },
  {
      "codigoInfracao": "01032",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - campainha/sinal sonoro - ausência "
  },
  {
      "codigoInfracao": "01033",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - campainha/sinal sonoro - más condições "
  },
  {
      "codigoInfracao": "01034",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - capô/capuz do motor - más condições "
  },
  {
      "codigoInfracao": "01035",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - carroçaria - más condições"
  },
  {
      "codigoInfracao": "01036",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - carroçaria - veículo desnivelado"
  },
  {
      "codigoInfracao": "01037",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - corrimão - ausência"
  },
  {
      "codigoInfracao": "01038",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - corrimão - más condições "
  },
  {
      "codigoInfracao": "01039",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - diferencial – más condições  "
  },
  {
      "codigoInfracao": "01040",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - embreagem – más condições"
  },
  {
      "codigoInfracao": "01041",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - farol alto - ausência"
  },
  {
      "codigoInfracao": "01042",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - farol alto - más condições "
  },
  {
      "codigoInfracao": "01043",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - farol baixo - ausência"
  },
  {
      "codigoInfracao": "01044",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - farol baixo - más condições "
  },
  {
      "codigoInfracao": "01045",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - farolete dianteiro/lâmpada - más condições  "
  },
  {
      "codigoInfracao": "01046",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - farolete dianteiro/lente - más condições "
  },
  {
      "codigoInfracao": "01047",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - farolete lateral direita/lâmpada - más condições "
  },
  {
      "codigoInfracao": "01048",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - farolete lateral direita/lente - más condições"
  },
  {
      "codigoInfracao": "01049",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - farolete lateral esquerda/lâmpada - más condições"
  },
  {
      "codigoInfracao": "01050",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - farolete lateral esquerda/lente - más condições"
  },
  {
      "codigoInfracao": "01051",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - farolete traseiro/lâmpada - más condições"
  },
  {
      "codigoInfracao": "01052",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - farolete traseiro/lente - más condições  "
  },
  {
      "codigoInfracao": "01053",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - freio - barulho excessivo "
  },
  {
      "codigoInfracao": "01054",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - freio - más condições"
  },
  {
      "codigoInfracao": "01055",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - freio de estacionamento - más condições "
  },
  {
      "codigoInfracao": "01056",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - freio de porta - adesivo más condições "
  },
  {
      "codigoInfracao": "01057",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - freio de porta - más condições "
  },
  {
      "codigoInfracao": "01058",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - guarda pertences próx motorista - más condições"
  },
  {
      "codigoInfracao": "01059",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - hodômetro - más condições"
  },
  {
      "codigoInfracao": "01060",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - janela lado direito - más condições"
  },
  {
      "codigoInfracao": "01061",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - janela lado esquerdo - más condições"
  },
  {
      "codigoInfracao": "01062",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - lataria/lanternagem - más condições"
  },
  {
      "codigoInfracao": "01064",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de farol – más condições"
  },
  {
      "codigoInfracao": "01065",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de freio break-light/lâmpada - más condições"
  },
  {
      "codigoInfracao": "01066",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de freio break-light/lente - más condições"
  },
  {
      "codigoInfracao": "01067",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de freio lado direito/lâmpada - más condições"
  },
  {
      "codigoInfracao": "01068",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de freio lado direito/lente - más condições "
  },
  {
      "codigoInfracao": "01069",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de freio lado esquerdo/lâmpada - más condições"
  },
  {
      "codigoInfracao": "01070",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de freio lado esquerdo/lente - más condições"
  },
  {
      "codigoInfracao": "01072",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de marcha-ré lado direito/lâmpada - ausência"
  },
  {
      "codigoInfracao": "01073",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de marcha-ré lado direito/lâmpada - más condições"
  },
  {
      "codigoInfracao": "01074",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de marcha-ré lado direito/lente - ausência"
  },
  {
      "codigoInfracao": "01075",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de marcha-ré lado direito/lente - más condições"
  },
  {
      "codigoInfracao": "01076",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de marcha-ré lado esquerdo/lâmpada - ausência"
  },
  {
      "codigoInfracao": "01077",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de marcha-ré lado esquerdo/lâmpada - más condições"
  },
  {
      "codigoInfracao": "01078",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de marcha-ré lado esquerdo/lente - ausência"
  },
  {
      "codigoInfracao": "01079",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de marcha-ré lado esquerdo/lente - más condições"
  },
  {
      "codigoInfracao": "01080",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de pisca-alerta/lâmpada - más condições"
  },
  {
      "codigoInfracao": "01081",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de pisca-alerta/lente - más condições"
  },
  {
      "codigoInfracao": "01082",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de placa/lâmpada - ausência"
  },
  {
      "codigoInfracao": "01083",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de placa/lâmpada - más condições"
  },
  {
      "codigoInfracao": "01084",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de salão/lâmpada - más condições "
  },
  {
      "codigoInfracao": "01085",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de salão/lente - ausência "
  },
  {
      "codigoInfracao": "01086",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de salão/lente - más condições"
  },
  {
      "codigoInfracao": "01092",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de seta – outros"
  },
  {
      "codigoInfracao": "01088",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de seta dianteira/lâmpada - ausência"
  },
  {
      "codigoInfracao": "01089",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de seta dianteira/lâmpada - más condições"
  },
  {
      "codigoInfracao": "01090",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de seta dianteira/lente - ausência "
  },
  {
      "codigoInfracao": "01091",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de seta dianteira/lente - más condições"
  },
  {
      "codigoInfracao": "01094",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de seta traseira/lâmpada - ausência"
  },
  {
      "codigoInfracao": "01095",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de seta traseira/lâmpada - más condições"
  },
  {
      "codigoInfracao": "01096",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de seta traseira/lente - ausência"
  },
  {
      "codigoInfracao": "01097",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de seta traseira/lente - más condições"
  },
  {
      "codigoInfracao": "01098",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de vigília/lâmpada - más condições"
  },
  {
      "codigoInfracao": "01099",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de vigília/lente - ausência"
  },
  {
      "codigoInfracao": "01100",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz de vigília/lente - más condições"
  },
  {
      "codigoInfracao": "01101",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz externa/lâmpada - outras"
  },
  {
      "codigoInfracao": "01102",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz externa/lente - outras"
  },
  {
      "codigoInfracao": "01103",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz interna/lâmpada - outras"
  },
  {
      "codigoInfracao": "01104",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz interna/lente - outras"
  },
  {
      "codigoInfracao": "01071",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz marcha-ré ambos lados – más condições "
  },
  {
      "codigoInfracao": "01087",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz seta dianteira ambos lados – más condições "
  },
  {
      "codigoInfracao": "01093",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - luz seta traseira ambos lados – más condições"
  },
  {
      "codigoInfracao": "01105",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - mesa do cobrador - ausência"
  },
  {
      "codigoInfracao": "01106",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - mesa do cobrador - más condições"
  },
  {
      "codigoInfracao": "01107",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - motor de arranque - más condições"
  },
  {
      "codigoInfracao": "01108",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - motor/desempenho/potência - más condições"
  },
  {
      "codigoInfracao": "01109",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - painel de controle – más condições"
  },
  {
      "codigoInfracao": "01110",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pára-brisa/lavador lado direito - ausência"
  },
  {
      "codigoInfracao": "01111",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pára-brisa/lavador lado direito - más condições"
  },
  {
      "codigoInfracao": "01112",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pára-brisa/lavador lado esquerdo - ausência"
  },
  {
      "codigoInfracao": "01113",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pára-brisa/lavador lado esquerdo - más condições"
  },
  {
      "codigoInfracao": "01114",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pára-brisa/vidro lado direito - más condições"
  },
  {
      "codigoInfracao": "01115",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pára-brisa/vidro lado esquerdo - más condições"
  },
  {
      "codigoInfracao": "01116",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pára-choque dianteiro - ausência"
  },
  {
      "codigoInfracao": "01117",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pára-choque dianteiro - más condições"
  },
  {
      "codigoInfracao": "01118",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pára-choque traseiro - ausência"
  },
  {
      "codigoInfracao": "01119",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pára-choque traseiro - más condições"
  },
  {
      "codigoInfracao": "01120",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pára-sol lado esquerdo - ausência "
  },
  {
      "codigoInfracao": "01121",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pára-sol lado esquerdo - más condições"
  },
  {
      "codigoInfracao": "01122",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pega-mão banco - ausência"
  },
  {
      "codigoInfracao": "01123",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pega-mão banco - más condições"
  },
  {
      "codigoInfracao": "01124",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pega-mão capô/capuz do motor - ausência"
  },
  {
      "codigoInfracao": "01125",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pega-mão capô/capuz do motor - más condições"
  },
  {
      "codigoInfracao": "01126",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pega-mão porta - ausência"
  },
  {
      "codigoInfracao": "01127",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pega-mão porta - más condições"
  },
  {
      "codigoInfracao": "01128",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - placa de itinerário - ausência"
  },
  {
      "codigoInfracao": "01129",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - placa de itinerário - más condições"
  },
  {
      "codigoInfracao": "01130",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - placa dianteira - más condições "
  },
  {
      "codigoInfracao": "01131",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - placa traseira - más condições"
  },
  {
      "codigoInfracao": "01132",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pneu dianteiro lado direito - reformado"
  },
  {
      "codigoInfracao": "01133",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pneu dianteiro lado esquerdo - reformado"
  },
  {
      "codigoInfracao": "01134",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pneu traseiro lado direito/externo - más condições"
  },
  {
      "codigoInfracao": "01135",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pneu traseiro lado direito/interno - más condições"
  },
  {
      "codigoInfracao": "01136",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pneu traseiro lado esquerdo/externo - más condições"
  },
  {
      "codigoInfracao": "01137",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - pneu traseiro lado esquerdo/interno - más condições"
  },
  {
      "codigoInfracao": "01138",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - porta central - más condições"
  },
  {
      "codigoInfracao": "01139",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - porta dianteira - más condições"
  },
  {
      "codigoInfracao": "01140",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - porta traseira - más condições"
  },
  {
      "codigoInfracao": "01141",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - refletor (olho de gato) traseiro - ausência"
  },
  {
      "codigoInfracao": "01142",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - refletor (olho de gato) traseiro - más condições"
  },
  {
      "codigoInfracao": "01143",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - retrovisor externo - más condições"
  },
  {
      "codigoInfracao": "01144",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - retrovisor interno - más condições"
  },
  {
      "codigoInfracao": "01145",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - revestimento interno - más condições"
  },
  {
      "codigoInfracao": "01146",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - roda dianteira lado direito - más condições"
  },
  {
      "codigoInfracao": "01147",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - roda dianteira lado esquerdo - más condições"
  },
  {
      "codigoInfracao": "01148",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - roda traseira lado direito - más condições"
  },
  {
      "codigoInfracao": "01149",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - roda traseira lado esquerdo - más condições"
  },
  {
      "codigoInfracao": "01150",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - silenciador no escapamento - ausência"
  },
  {
      "codigoInfracao": "01151",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - silenciador no escapamento - más condições"
  },
  {
      "codigoInfracao": "01152",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - tampa de acesso interna - ausência"
  },
  {
      "codigoInfracao": "01153",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - tampa de acesso interna - más condições"
  },
  {
      "codigoInfracao": "01154",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - tampa de acesso lateral externa - ausência"
  },
  {
      "codigoInfracao": "01155",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - tampa de acesso lateral externa - más condições"
  },
  {
      "codigoInfracao": "01156",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - tanque de combustível - más condições"
  },
  {
      "codigoInfracao": "01157",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - transmissão – más condições"
  },
  {
      "codigoInfracao": "01158",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - triângulo de segurança - más condições"
  },
  {
      "codigoInfracao": "01160",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - velocímetro - más condições"
  },
  {
      "codigoInfracao": "01161",
      "nomeInfracao": "Permitir a saída de veículo da garagem ou pátio de estacionamento para o início da operação ou operar com veículo fora do adequado estado de conservação - volante – más condições"
  }
  ];
}
