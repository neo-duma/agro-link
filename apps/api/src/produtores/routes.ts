import { Router } from 'express';
import { prisma } from '../prisma.js';
import { exigirAutenticacao, type AuthRequest } from '../auth/middleware.js';
import { criarProdutorSchema } from './schemas.js';

const router = Router();

// Criar o perfil de produtor para a conta logada (como "criar uma Página")
router.post('/', exigirAutenticacao, async (req: AuthRequest, res) => {
  const resultado = criarProdutorSchema.safeParse(req.body);

  if (!resultado.success) {
    return res.status(400).json({ erro: resultado.error.issues[0].message });
  }

  const produtorExistente = await prisma.produtor.findUnique({
    where: { userId: req.usuario!.sub },
  });

  if (produtorExistente) {
    return res.status(409).json({ erro: 'Esta conta já tem um perfil de produtor.' });
  }

  const { nomeLoja, descricao, localizacao } = resultado.data;

  const produtor = await prisma.produtor.create({
    data: { userId: req.usuario!.sub, nomeLoja, descricao, localizacao },
  });

  return res.status(201).json(produtor);
});

// Perfil público de um produtor (para a página /produtor/[id])
router.get('/:id', async (req, res) => {
  const produtor = await prisma.produtor.findUnique({
    where: { id: req.params.id },
    include: { produtos: true },
  });

  if (!produtor) {
    return res.status(404).json({ erro: 'Produtor não encontrado.' });
  }

  return res.json(produtor);
});

export default router;
