export interface IIrregularidades extends Array<IIrregularidade> {}
export interface IIrregularidade {
  id: string;
  numeroIrregularidade: string;
  dataIrregularidade: string;
  horario: string;
  local: string;
  numeroLocal: string;
  bairro: string;
  descricao: string;
  numeroInfracao: string;
  numeroConsorcio: string;
  numeroLinha: string;
  numeroVeiculo: string;
}
