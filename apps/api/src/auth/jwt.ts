import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET ?? 'troque-por-um-segredo-forte';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? '7d';

export interface TokenPayload {
  sub: string; // id do usuário
  tipo: 'COMPRADOR' | 'PRODUTOR' | 'ADMIN';
}

export function assinarToken(payload: TokenPayload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verificarToken(token: string): TokenPayload {
  return jwt.verify(token, JWT_SECRET) as TokenPayload;
}
