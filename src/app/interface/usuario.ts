export interface IUsuarios extends Array<IUsuario> {}
export interface IUsuario {
    matricula: string
    nome: string;
    senha: string;
    perfil: string;
}
