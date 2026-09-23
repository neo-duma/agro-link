import { z } from 'zod';

export const criarProdutorSchema = z.object({
  nomeLoja: z.string().min(2, 'Nome muito curto'),
  descricao: z.string().optional(),
  localizacao: z.string().optional(),
});

export type CriarProdutorInput = z.infer<typeof criarProdutorSchema>;
