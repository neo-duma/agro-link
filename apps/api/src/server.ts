import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import healthRouter from './routes/health.js';
import authRouter from './auth/routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/health', healthRouter);
app.use('/auth', authRouter);

// próximas rotas: /produtores, /produtos, /pedidos, /carrinho

const port = process.env.API_PORT ?? 3333;
app.listen(port, () => {
  console.log(`AgroLink API rodando na porta ${port}`);
});
