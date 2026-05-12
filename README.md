# Your Notes 📝

Uma aplicação web moderna para gerenciamento de notas de estudo com recursos premium, integração com IA e pagamentos online.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Requisitos do Sistema](#requisitos-do-sistema)
- [Instalação](#instalação)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Como Executar](#como-executar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [APIs de Terceiros](#apis-de-terceiros)
- [Banco de Dados](#banco-de-dados)
- [Build para Produção](#build-para-produção)

---

## 🎯 Visão Geral

**Your Notes** é uma plataforma completa de gerenciamento de notas de estudo que combina funcionalidades de criação e organização de conteúdo com tecnologia de IA para melhorar a experiência do usuário. A aplicação oferece dois níveis de acesso: usuários gratuitos e premium.

---

## ✨ Funcionalidades

### Gerais
- ✅ Autenticação com JWT (registro e login)
- ✅ Criação e organização de notas por matérias
- ✅ Interface responsiva e moderna
- ✅ Upload e compressão de imagens
- ✅ Armazenamento seguro de senhas com bcrypt

### Premium (VIP)
- 🤖 Geração automática de descrições com IA (Google Gemini)
- 💳 Sistema de pagamento integrado (Stripe)
- 👑 Acesso a todas as funcionalidades avançadas
- 📊 Portal de gerenciamento de assinatura

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js** 16.2.5 - Framework React com SSR/SSG
- **React** 19.2.4 - Biblioteca UI
- **TypeScript** 5 - Linguagem tipada
- **Tailwind CSS** 4 - Framework de estilos
- **React Icons** 5.6.0 - Ícones vetoriais
- **Clsx & Tailwind Merge** - Utilitários de classes

### Backend
- **Next.js API Routes** - Endpoints REST
- **Next.js Server Actions** - Ações de servidor
- **Prisma** 7.8.0 - ORM para banco de dados

### Banco de Dados
- **PostgreSQL** - Banco de dados relacional
- **Prisma Adapter PG** - Adaptador PostgreSQL para Prisma

### Autenticação & Segurança
- **JWT (JSON Web Tokens)** 9.0.3 - Autenticação stateless
- **bcryptjs** 3.0.3 - Hash de senhas

### Pagamentos & Billing
- **Stripe** 22.1.0 - Processamento de pagamentos
- **Stripe.js** 1.49.0 - Cliente Stripe para o frontend

### IA & Processamento
- **Google GenAI** 2.0.0 - API do Google Gemini
- **Browser Image Compression** 2.0.2 - Compressão de imagens

### Armazenamento de Mídia
- **Cloudinary** 2.10.0 - Serviço de hospedagem de imagens

### Desenvolvimento
- **ESLint** 9 - Linter de código
- **TSX** 4.21.0 - Executor TypeScript
- **pnpm** - Gerenciador de pacotes

---

## 💻 Requisitos do Sistema

- **Node.js** ≥ 18.x
- **pnpm** ≥ 8.x (ou npm/yarn)
- **PostgreSQL** ≥ 12
- **Git** (para controle de versão)

---

## 📦 Instalação

### Passo 1: Clonar o Repositório

```bash
git clone <https://github.com/lednew2004/fullstack-your-notes.git>
cd your-notes
```

### Passo 2: Instalar Dependências

```bash
pnpm install
```

Ou, se usar npm:
```bash
npm install
```

### Passo 3: Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto e adicione as variáveis listadas na seção [Variáveis de Ambiente](#variáveis-de-ambiente).

### Passo 4: Configurar Banco de Dados

Se estiver usando Docker, inicie o PostgreSQL:

```bash
docker-compose up -d
```

Depois, execute as migrations do Prisma:

```bash
pnpm prisma migrate deploy
```

Gere o cliente Prisma:

```bash
pnpm prisma generate
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
# ========== DATABASE ==========
# URL de conexão PostgreSQL
# Formato: postgresql://user:password@host:port/database
# Exemplo usando Docker: postgresql://docker:docker@localhost:5658/yourNote
DATABASE_URL="postgresql://docker:docker@localhost:5658/yourNote"

# ========== AUTHENTICATION ==========
# Chave secreta para assinar tokens JWT
# Gere uma string aleatória forte (mínimo 32 caracteres)
JWT_SECRET="sua_chave_jwt_secreta_muito_segura_aqui_12345678"

# ========== GOOGLE GEMINI API ==========
# Chave de API do Google Gemini para IA
# Obtenha em: https://ai.google.dev/
GEMINI_API_KEY="sua_chave_gemini_aqui"

# ========== STRIPE PAYMENT ==========
# Chave secretas do Stripe (backend)
# Obtenha em: https://dashboard.stripe.com/
STRIPE_SECRET_KEY="sk_test_sua_chave_secreta_stripe_aqui"

# Chave pública do Stripe (frontend)
STRIPE_PUBLISHABLE_KEY="pk_test_sua_chave_publica_stripe_aqui"

# ========== CLOUDINARY (OPCIONAL) ==========
# Credenciais do Cloudinary para armazenamento de imagens
# Obtenha em: https://cloudinary.com/
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="seu_cloud_name"
CLOUDINARY_API_KEY="sua_api_key"
CLOUDINARY_API_SECRET="sua_api_secret"
```

### Variáveis Explicadas

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `DATABASE_URL` | URL de conexão PostgreSQL | `postgresql://user:pass@localhost:5432/db` |
| `JWT_SECRET` | Chave para assinar tokens JWT | String aleatória forte |
| `GEMINI_API_KEY` | API Key do Google Gemini | Token do Google AI |
| `STRIPE_SECRET_KEY` | Chave secreta Stripe (servidor) | `sk_test_...` |
| `STRIPE_PUBLISHABLE_KEY` | Chave pública Stripe (cliente) | `pk_test_...` |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Cloud name do Cloudinary | Nome da sua nuvem |
| `CLOUDINARY_API_KEY` | API Key Cloudinary | Token Cloudinary |
| `CLOUDINARY_API_SECRET` | API Secret Cloudinary | Secret token Cloudinary |

---

## 🚀 Como Executar

### Desenvolvimento

```bash
pnpm dev
```

A aplicação estará disponível em `http://localhost:3000`

### Build para Produção

```bash
pnpm build
```

### Iniciar Servidor de Produção

```bash
pnpm start
```

### Gerenciar Banco de Dados

Visualizar dados do banco de dados no Prisma Studio:

```bash
pnpm prisma studio
```

---

## 📁 Estrutura de Pastas

```
your-notes/
├── app/                          # Diretório principal da aplicação
│   ├── (pages)/                  # Rotas páginas (layout de grupo)
│   │   ├── login/                # Página de login
│   │   ├── register/             # Página de registro
│   │   ├── profile/              # Página de perfil do usuário
│   │   │   ├── [noteId]/         # Dinâmica para matérias
│   │   │   │   ├── [noteDetailsId]/  # Dinâmica para notas
│   │   │   │   └── new/          # Criar nova nota
│   │   │   └── upgrade/          # Página de upgrade para VIP
│   │   └── page.tsx              # Raiz do layout de páginas
│   │
│   ├── actions/                  # Server Actions (lógica do servidor)
│   │   ├── create-note.ts        # Criar nota
│   │   ├── create-subject.ts     # Criar matéria/assunto
│   │   ├── gemini.ts             # Integração com IA Gemini
│   │   ├── get-current-user.ts   # Buscar usuário autenticado
│   │   ├── get-note.ts           # Buscar nota específica
│   │   ├── get-profile.ts        # Buscar perfil do usuário
│   │   ├── get-subject-id.ts     # Buscar ID da matéria
│   │   ├── login.ts              # Ação de login
│   │   └── register.ts           # Ação de registro
│   │
│   ├── api/                      # Rotas API
│   │   └── stripe/               # Integração Stripe
│   │       ├── create-checkout/  # Criar sessão de checkout
│   │       ├── create-portal/    # Criar portal de billing
│   │       └── webhook/          # Webhook do Stripe
│   │
│   ├── components/               # Componentes React reutilizáveis
│   │   ├── portal-button.tsx     # Botão do portal de billing
│   │   ├── portal.tsx            # Componente portal
│   │   ├── pricing-plans.tsx     # Planos de preço
│   │   ├── pricings.tsx          # Componente de preços
│   │   └── scroll-button.tsx     # Botão de scroll
│   │
│   ├── hooks/                    # Custom Hooks React
│   │   └── use-stripe.ts         # Hook para integração Stripe
│   │
│   ├── lib/                      # Utilitários e configurações
│   │   ├── auth.ts               # Middleware de autenticação JWT
│   │   ├── prisma.ts             # Instância do cliente Prisma
│   │   ├── stripe.ts             # Configuração do Stripe
│   │   ├── upload-image.ts       # Funcionalidade de upload de imagens
│   │   └── utils.ts              # Funções utilitárias gerais
│   │
│   ├── layout.tsx                # Layout raiz da aplicação
│   ├── page.tsx                  # Página inicial
│   └── globals.css               # Estilos globais
│
├── generated/                    # Gerado automaticamente
│   └── prisma/                   # Cliente Prisma gerado
│       ├── client.ts             # Cliente principal
│       ├── models/               # Modelos de dados
│       │   ├── Notes.ts          # Modelo Notes
│       │   ├── Subject.ts        # Modelo Subject
│       │   └── User.ts           # Modelo User
│       └── ...                   # Outros arquivos gerados
│
├── prisma/                       # Configuração do Prisma
│   ├── schema.prisma             # Schema do banco de dados
│   └── migrations/               # Histórico de migrations
│       ├── migration_lock.toml   # Lock file
│       ├── 20260507174057.../    # Migration 1
│       └── 20260508135525.../    # Migration 2
│
├── public/                       # Arquivos estáticos públicos
│
├── docker-compose.yml            # Configuração do PostgreSQL com Docker
├── next.config.ts                # Configuração do Next.js
├── tsconfig.json                 # Configuração TypeScript
├── postcss.config.mjs            # Configuração PostCSS (Tailwind)
├── prisma.config.ts              # Configuração Prisma
├── package.json                  # Dependências do projeto
├── pnpm-lock.yaml                # Lock file do pnpm
├── pnpm-workspace.yaml           # Configuração de workspace pnpm
└── README.md                      # Este arquivo
```

### Descrição dos Diretórios Principais

| Diretório | Propósito |
|-----------|----------|
| `app/(pages)/` | Páginas da aplicação usando sistema de rotas do Next.js 13+ |
| `app/actions/` | Server Actions para operações seguras no servidor |
| `app/api/` | Rotas API RESTful |
| `app/components/` | Componentes React reutilizáveis |
| `app/hooks/` | Custom Hooks React |
| `app/lib/` | Código utilitário, configurações e funções auxiliares |
| `prisma/` | Schema do banco de dados e migrations |
| `generated/` | Código gerado automaticamente pelo Prisma |
| `public/` | Arquivos estáticos (imagens, fontes, etc.) |

---

## 🔌 APIs de Terceiros

### 1. **Google Gemini API** 🤖

**Descrição:** Geração automática de descrições para notas usando IA.

**Uso:** Gera descrições inteligentes baseadas no título da nota (exclusivo para usuários VIP).

**Configuração:**
- Obtenha a chave em: [Google AI Studio](https://ai.google.dev/)
- Defina `GEMINI_API_KEY` no `.env.local`
- Modelo utilizado: `gemini-2.5-flash`

**Arquivo relacionado:** [app/actions/gemini.ts](app/actions/gemini.ts)

---

### 2. **Stripe** 💳

**Descrição:** Processamento de pagamentos e gerenciamento de assinaturas.

**Uso:** 
- Checkout para upgrade para plano VIP
- Portal de gerenciamento de assinatura
- Webhooks para sincronizar status de pagamento

**Configuração:**
- Obtenha as chaves em: [Stripe Dashboard](https://dashboard.stripe.com/)
- `STRIPE_SECRET_KEY` - Chave secreta (server-side)
- `STRIPE_PUBLISHABLE_KEY` - Chave pública (client-side)
- Versão da API: `2026-04-22.dahlia`

**Arquivos relacionados:**
- [app/api/stripe/create-checkout/route.ts](app/api/stripe/create-checkout/route.ts)
- [app/api/stripe/create-portal/route.ts](app/api/stripe/create-portal/route.ts)
- [app/api/stripe/webhook/route.ts](app/api/stripe/webhook/route.ts)
- [app/lib/stripe.ts](app/lib/stripe.ts)
- [app/hooks/use-stripe.ts](app/hooks/use-stripe.ts)

---

### 3. **Cloudinary** ☁️

**Descrição:** Hospedagem e processamento de imagens.

**Uso:** Upload, armazenamento e otimização de imagens de notas.

**Configuração:**
- Obtenha as credenciais em: [Cloudinary Dashboard](https://cloudinary.com/console)
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` - Cloud name (público)
- `CLOUDINARY_API_KEY` - API Key (privado)
- `CLOUDINARY_API_SECRET` - API Secret (privado)

**Arquivo relacionado:** [app/lib/upload-image.ts](app/lib/upload-image.ts)

---

### 4. **PostgreSQL** 🗄️

**Descrição:** Banco de dados relacional principal.

**Uso:** Armazenamento de usuários, notas, matérias e dados de assinatura.

**Configuração:**
- URL de conexão: `DATABASE_URL` no `.env.local`
- Pode ser executado localmente via Docker Compose
- Porta padrão: 5658 (Docker) ou 5432 (instalação local)

**Arquivo relacionado:** [prisma/schema.prisma](prisma/schema.prisma)

---

## 🗄️ Banco de Dados

### Schema Prisma

A aplicação utiliza três modelos principais:

#### **User** 👤
```prisma
model User {
  id            String @id @default(uuid())
  name          String
  email         String @unique
  password_hash String
  customerId    String?           // ID do cliente Stripe
  isVip         Boolean @default(false)
  created_At    DateTime @default(now())
  subjects      Subject[]
}
```

#### **Subject** 📚
```prisma
model Subject {
  id          String @id @default(uuid())
  title       String
  description String
  finished    DateTime?
  created_At  DateTime @default(now())
  user        User @relation(fields: [userid], references: [id])
  userid      String
  notes       Notes[]
}
```

#### **Notes** 📝
```prisma
model Notes {
  id         String @id @default(uuid())
  title      String
  description String
  codExample String
  urlExample String
  subject    Subject @relation(fields: [subjectid], references: [id])
  subjectid  String
  created_At DateTime @default(now())
}
```

### Executar Migrations

```bash
# Aplicar todas as migrations pendentes
pnpm prisma migrate deploy

# Criar nova migration
pnpm prisma migrate dev --name nome_da_migration

# Ver status das migrations
pnpm prisma migrate status

# Resetar banco (apenas desenvolvimento!)
pnpm prisma migrate reset
```

### Visualizar Dados

Abra o Prisma Studio para gerenciar dados visualmente:

```bash
pnpm prisma studio
```

---

## 🏗️ Build para Produção

### Preparar Build

```bash
pnpm build
```

Este comando:
1. Gera o cliente Prisma
2. Aplica migrations pendentes
3. Compila e otimiza a aplicação Next.js

### Executar em Produção

```bash
pnpm start
```

### Variáveis de Ambiente em Produção

⚠️ **Importante:** Em produção, use:
- Chaves de API reais do Stripe (não test keys)
- JWT_SECRET muito seguro e aleatório
- DATABASE_URL apontando para um banco PostgreSQL gerenciado
- GEMINI_API_KEY válida e com limites configurados

---

## 🐳 Usando Docker Compose

Para desenvolver localmente com PostgreSQL containerizado:

```bash
# Iniciar serviços
docker-compose up -d

# Parar serviços
docker-compose down

# Ver logs
docker-compose logs -f postgresql
```

**Credenciais padrão (Docker):**
- Usuário: `docker`
- Senha: `docker`
- Database: `yourNote`
- Host: `localhost`
- Porta: `5658`

---

## 📚 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev              # Inicia servidor de desenvolvimento

# Build e Deploy
pnpm build            # Compila para produção
pnpm start            # Inicia servidor de produção

# Prisma
pnpm prisma studio   # Abre Prisma Studio
pnpm prisma generate # Gera cliente Prisma
```

---

## 🔒 Segurança

- ✅ Senhas hasheadas com bcryptjs
- ✅ Autenticação com JWT
- ✅ Tokens armazenados em cookies seguros (HttpOnly)
- ✅ Variáveis sensíveis em arquivo `.env.local` (não versionado)
- ✅ Server Actions para operações sensíveis
- ✅ Validação de entrada

---

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
2. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
3. Push para a branch (`git push origin feature/AmazingFeature`)
4. Abra um Pull Request

---

## 📞 Suporte

Para dúvidas ou problemas:
- Verifique a documentação oficial: [Next.js](https://nextjs.org/), [Prisma](https://www.prisma.io/), [Stripe](https://stripe.com/docs)
- Abra uma issue no repositório

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️ usando Next.js, React e TypeScript**
