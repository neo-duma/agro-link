import { Router } from 'express';
import bcrypt from 'bcrypt';
import { prisma } from '../prisma.js';
import { assinarToken } from './jwt.js';
import { cadastroSchema, loginSchema } from './schemas.js';
import { exigirAutenticacao, type AuthRequest } from './middleware.js';

const router = Router();

router.post('/cadastro', async (req, res) => {
  const resultado = cadastroSchema.safeParse(req.body);

  if (!resultado.success) {
    return res.status(400).json({ erro: resultado.error.issues[0].message });
  }

  const { nome, email, senha, telefone } = resultado.data;

  const usuarioExistente = await prisma.user.findUnique({ where: { email } });
  if (usuarioExistente) {
    return res.status(409).json({ erro: 'Já existe uma conta com este e-mail.' });
  }

  const senhaHash = await bcrypt.hash(senha, 10);

  const usuario = await prisma.user.create({
    data: { nome, email, senhaHash, telefone },
  });

  const token = assinarToken({ sub: usuario.id, tipo: usuario.tipo });

  return res.status(201).json({
    token,
    usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email, tipo: usuario.tipo },
  });
});

router.post('/login', async (req, res) => {
  const resultado = loginSchema.safeParse(req.body);

  if (!resultado.success) {
    return res.status(400).json({ erro: resultado.error.issues[0].message });
  }

  const { email, senha } = resultado.data;

  const usuario = await prisma.user.findUnique({ where: { email } });
  if (!usuario) {
    return res.status(401).json({ erro: 'E-mail ou senha incorretos.' });
  }

  const senhaConfere = await bcrypt.compare(senha, usuario.senhaHash);
  if (!senhaConfere) {
    return res.status(401).json({ erro: 'E-mail ou senha incorretos.' });
  }

  const token = assinarToken({ sub: usuario.id, tipo: usuario.tipo });

  return res.json({
    token,
    usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email, tipo: usuario.tipo },
  });
});

router.get('/me', exigirAutenticacao, async (req: AuthRequest, res) => {
  const usuario = await prisma.user.findUnique({
    where: { id: req.usuario!.sub },
    select: {
      id: true,
      nome: true,
      email: true,
      tipo: true,
      telefone: true,
      criadoEm: true,
      produtor: { select: { id: true, nomeLoja: true } },
    },
  });

  if (!usuario) {
    return res.status(404).json({ erro: 'Usuário não encontrado.' });
  }

  return res.json(usuario);
});

export default router;
