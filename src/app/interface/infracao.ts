export interface IInfracoes extends Array<IInfracao> {}
export interface IInfracao {
  id: string;
  codigoInfracao: string;
  nomeInfracao: string;
}
