# AgroLink

Marketplace de produtos agrícolas — conecta produtores e compradores em um só lugar.

## Estrutura do monorepo

```
agrolink/
├── apps/
│   ├── web/      # Frontend Next.js (App Router) + Tailwind
│   └── api/      # Backend Express + Prisma
├── packages/
│   └── shared/   # Tipos TypeScript compartilhados entre web e api
├── docker-compose.yml   # Postgres + Redis locais
└── .env.example
```

## Pré-requisitos

- Node.js 20+
- Docker (para Postgres/Redis locais)

## Setup inicial

```bash
# 1. instalar dependências de todos os workspaces
npm install

# 2. copiar variáveis de ambiente
cp .env.example .env
cp .env.example apps/api/.env

# 3. subir banco de dados e cache
docker compose up -d

# 4. gerar client do Prisma e rodar migrações
npm run db:migrate

# 5. rodar backend (porta 3333)
npm run dev:api

# 6. em outro terminal, rodar frontend (porta 3000)
npm run dev:web
```

## Scripts úteis

| Comando | Descrição |
|---|---|
| `npm run dev:web` | inicia o frontend Next.js |
| `npm run dev:api` | inicia o backend NestJS em modo watch |
| `npm run db:migrate` | roda as migrações do Prisma |
| `npm run db:studio` | abre o Prisma Studio (visualizar dados) |
| `npm run build` | build de produção de todos os workspaces |

## Estado atual (Fase 1)

- [x] Setup do repositório
- [x] Autenticação (cadastro/login comprador e produtor) — rotas `/auth/cadastro`, `/auth/login`, `/auth/me` na API; telas `/login` e `/cadastro` no frontend
- [ ] CRUD de perfil de produtor
- [ ] CRUD de produtos + categorias
- [ ] Upload de imagens

Ver `agrolink-plano-de-execucao.md` para o roadmap completo.
