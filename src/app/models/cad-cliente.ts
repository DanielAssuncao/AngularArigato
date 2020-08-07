import { CadEndereco } from './cad-endereco';

export interface CadCliente {
    id: number;
    nome: string;
    dataNascimento: Date;
    telefone: number;
    rg: number;
    cpf: number;
    dataCadastro: Date;
    cadEndereco: CadEndereco;
    ddd: number;
}
