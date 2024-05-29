export interface IVeiculos extends Array<IVeiculo> {}
export interface IVeiculo {
  id: string;
  numeroVeiculo: string;
  placa: string;
  tipo: string;
  operadora: string;
}
