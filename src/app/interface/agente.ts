export interface IAgentes extends Array<IAgente>  {}
export interface IAgente {
  id: string;
  matriculaAgenteFiscalizador: string;
  nomeAgenteFiscalizador: string;
  cargo: string;
  lotacao: string;
}
