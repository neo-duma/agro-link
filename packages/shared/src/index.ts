export type TipoUsuario = 'COMPRADOR' | 'PRODUTOR' | 'ADMIN';

export type StatusPedido =
  | 'PENDENTE'
  | 'CONFIRMADO'
  | 'EM_PREPARO'
  | 'ENVIADO'
  | 'ENTREGUE'
  | 'CANCELADO';

export interface ProdutoResumo {
  id: string;
  nome: string;
  preco: number;
  unidade: string;
  fotos: string[];
  produtorId: string;
}

export interface ProdutorResumo {
  id: string;
  nomeLoja: string;
  localizacao: string | null;
  logoUrl: string | null;
}
