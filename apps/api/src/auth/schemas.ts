import { z } from 'zod';

export const cadastroSchema = z.object({
  nome: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('E-mail inválido'),
  senha: z.string().min(6, 'A senha precisa ter no mínimo 6 caracteres'),
  telefone: z.string().optional(),
  tipo: z.enum(['COMPRADOR', 'PRODUTOR']).default('COMPRADOR'),
});

export const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  senha: z.string().min(1, 'Informe a senha'),
});

export type CadastroInput = z.infer<typeof cadastroSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
