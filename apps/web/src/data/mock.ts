export interface Produto {
  id: string;
  nome: string;
  preco: number;
  unidade: string;
  produtor: string;
  categoria: string;
}

export interface Produtor {
  id: string;
  nome: string;
  localizacao: string;
  avaliacao: number;
  bio: string;
}

export const produtos: Produto[] = [
  { id: '1', nome: 'Tomate orgânico', preco: 6.9, unidade: 'kg', produtor: 'Sítio Boa Terra', categoria: 'Hortifruti' },
  { id: '2', nome: 'Alface crespa', preco: 3.5, unidade: 'un', produtor: 'Fazenda São João', categoria: 'Hortifruti' },
  { id: '3', nome: 'Milho verde', preco: 4.2, unidade: 'kg', produtor: 'Sítio Boa Terra', categoria: 'Grãos' },
  { id: '4', nome: 'Mel puro', preco: 22.0, unidade: 'un', produtor: 'Apiário Mata Fria', categoria: 'Outros' },
];

export const produtores: Produtor[] = [
  {
    id: '1',
    nome: 'Sítio Boa Terra',
    localizacao: 'Minas Gerais',
    avaliacao: 4.8,
    bio: 'Produtor familiar há 3 gerações, foco em hortaliças orgânicas.',
  },
];

export const categorias = ['Grãos', 'Hortifruti', 'Laticínios', 'Insumos'];
