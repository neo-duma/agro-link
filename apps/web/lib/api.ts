const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3333';

interface Usuario {
  id: string;
  nome: string;
  email: string;
  tipo: 'CLIENTE' | 'ADMIN';
}

interface AuthResponse {
  token: string;
  usuario: Usuario;
}

async function chamarApi<T>(caminho: string, body: unknown, token?: string): Promise<T> {
  const res = await fetch(`${API_URL}${caminho}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(body),
  });

  const dados = await res.json();

  if (!res.ok) {
    throw new Error(dados.erro ?? 'Ocorreu um erro. Tente novamente.');
  }

  return dados as T;
}

export function cadastrar(input: { nome: string; email: string; senha: string }) {
  return chamarApi<AuthResponse>('/auth/cadastro', input);
}

export function login(input: { email: string; senha: string }) {
  return chamarApi<AuthResponse>('/auth/login', input);
}

export function criarPerfilProdutor(
  input: { nomeLoja: string; descricao?: string; localizacao?: string },
  token: string,
) {
  return chamarApi<{ id: string; nomeLoja: string }>('/produtores', input, token);
}
