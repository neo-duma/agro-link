import type { Request, Response, NextFunction } from 'express';
import { verificarToken, type TokenPayload } from './jwt.js';

export interface AuthRequest extends Request {
  usuario?: TokenPayload;
}

export function exigirAutenticacao(req: AuthRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization;

  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ erro: 'Token não fornecido.' });
  }

  const token = header.replace('Bearer ', '');

  try {
    req.usuario = verificarToken(token);
    next();
  } catch {
    return res.status(401).json({ erro: 'Token inválido ou expirado.' });
  }
}
