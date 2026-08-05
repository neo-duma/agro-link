import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import healthRouter from './routes/health.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/health', healthRouter);

// próximas rotas (Fase 1): /auth, /produtores, /produtos, /pedidos, /carrinho

const port = process.env.API_PORT ?? 3333;
app.listen(port, () => {
  console.log(`AgroLink API rodando na porta ${port}`);
});
