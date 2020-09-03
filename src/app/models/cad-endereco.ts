import { CadCidade } from './cad-cidade';

export interface CadEndereco {
    id: number;
    logradouro: string;
    numero: number;
    complemento: string;
    bairro: string;
    cep: number;
    referencia: string;
    cadCidade: CadCidade;
}
