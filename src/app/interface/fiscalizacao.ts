export interface IFiscalizacoes extends Array<IFiscalizacao> {}
export interface IFiscalizacao {
  id: string;
  matriculaAgente: string;
  nomeAgente: string;
  dataEmissao: string;
  dataConferencia: string;
}
