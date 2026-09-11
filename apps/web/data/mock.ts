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
  { id: '3', nome: 'Cenoura', preco: 4.5, unidade: 'kg', produtor: 'Sítio Boa Terra', categoria: 'Hortifruti' },
  { id: '4', nome: 'Couve', preco: 2.9, unidade: 'maço', produtor: 'Fazenda São João', categoria: 'Hortifruti' },
  { id: '5', nome: 'Abobrinha', preco: 5.2, unidade: 'kg', produtor: 'Sítio Boa Terra', categoria: 'Hortifruti' },
  { id: '6', nome: 'Banana prata', preco: 4.0, unidade: 'kg', produtor: 'Chácara Vale Verde', categoria: 'Frutas' },
  { id: '7', nome: 'Manga', preco: 6.5, unidade: 'kg', produtor: 'Chácara Vale Verde', categoria: 'Frutas' },
  { id: '8', nome: 'Laranja', preco: 3.8, unidade: 'kg', produtor: 'Pomar Santa Rita', categoria: 'Frutas' },
  { id: '9', nome: 'Abacaxi', preco: 7.0, unidade: 'un', produtor: 'Pomar Santa Rita', categoria: 'Frutas' },
  { id: '10', nome: 'Mamão papaya', preco: 5.5, unidade: 'un', produtor: 'Chácara Vale Verde', categoria: 'Frutas' },
  { id: '11', nome: 'Milho verde', preco: 4.2, unidade: 'kg', produtor: 'Sítio Boa Terra', categoria: 'Grãos' },
  { id: '12', nome: 'Feijão carioca', preco: 8.9, unidade: 'kg', produtor: 'Fazenda São João', categoria: 'Grãos' },
  { id: '13', nome: 'Mel puro', preco: 22.0, unidade: 'un', produtor: 'Apiário Mata Fria', categoria: 'Outros' },
];

export const produtores: Produtor[] = [
  { id: '1', nome: 'Sítio Boa Terra', localizacao: 'Minas Gerais', avaliacao: 4.8, bio: 'Produtor familiar há 3 gerações, foco em hortaliças orgânicas.' },
  { id: '2', nome: 'Fazenda São João', localizacao: 'São Paulo', avaliacao: 4.6, bio: 'Especializada em verduras frescas colhidas na semana.' },
  { id: '3', nome: 'Chácara Vale Verde', localizacao: 'Bahia', avaliacao: 4.9, bio: 'Frutas tropicais direto do pé, sem intermediários.' },
  { id: '4', nome: 'Pomar Santa Rita', localizacao: 'Minas Gerais', avaliacao: 4.7, bio: 'Tradição de três gerações em cítricos.' },
];

export const categorias = ['Grãos', 'Hortifruti', 'Laticínios', 'Insumos', 'Frutas'];

export const maisPesquisados = produtos.slice(0, 6);
