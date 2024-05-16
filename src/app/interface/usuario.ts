export interface IUsuarios extends Array<IUsuario> {}
export interface IUsuario {
  id: string;
  matricula: string;
  nome: string;
  senha: string;
  perfil: string;
}
