export interface IFiscalizacoes extends Array<IFiscalizacao> {}
export interface IFiscalizacao {
    matriculaAgente: string;
    nomeAgente: string;
    dataEmissao: string;
    dataConferencia: string;
}
