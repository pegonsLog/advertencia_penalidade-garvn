export interface IIrregularidades extends Array<IIrregularidade> {}
export interface IIrregularidade {
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