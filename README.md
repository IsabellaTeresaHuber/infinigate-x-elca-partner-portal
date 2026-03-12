# Cloudflare Workers React Template

[![[cloudflarebutton]]](https://deploy.workers.cloudflare.com)

A production-ready full-stack template for building scalable applications on Cloudflare. Features a Cloudflare Workers backend with Durable Objects for real-time data persistence (Users, Chats, Messages), paired with a modern React frontend using Vite, Tanstack Query, shadcn/ui, and Tailwind CSS.

## ✨ Key Features

- **Backend**: Hono routing, Global Durable Object for multi-tenant entity storage, IndexedEntity pattern for efficient listing/pagination
- **Entities**: User management, Chat boards with embedded messages (CRUD operations with indexes)
- **Frontend**: React 18, Router, Tanstack Query for data fetching/mutations, shadcn/ui components, Tailwind CSS with custom design system
- **Real-time capable**: Durable Objects enable stateful, low-latency operations
- **Type-safe**: Full TypeScript end-to-end, shared types between frontend/backend
- **Development**: Hot reload for both frontend and worker, Bun-powered builds
- **Deployment**: One-command deploy to Cloudflare Workers/Pages with SPA asset handling

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Runtime** | Cloudflare Workers, Durable Objects |
| **Backend** | Hono, TypeScript |
| **Frontend** | React 18, Vite, Tanstack React Query, React Router |
| **UI** | shadcn/ui, Tailwind CSS, Lucide Icons, Framer Motion |
| **Data** | SQLite-backed Durable Objects (via Workers) |
| **Dev Tools** | Bun, ESLint, TypeScript 5, Wrangler |
| **Utils** | Zod, Immer, UUID |

## 🚀 Quick Start

### Prerequisites
- [Bun](https://bun.sh/) installed
- [Cloudflare CLI (Wrangler)](https://developers.cloudflare.com/workers/wrangler/install/) installed and authenticated (`wrangler login`)

### Installation
```bash
git clone <your-repo-url>
cd <project-directory>
bun install
```

### Local Development
```bash
bun dev
```
- Frontend: http://localhost:3000
- API: http://localhost:3000/api/*
- Worker hot-reloads automatically

### Type Generation
```bash
bun cf-typegen  # Generates Env types from wrangler
```

## 📖 Usage

### API Endpoints
All routes under `/api/`:

- **Users**: `GET/POST /api/users`, `DELETE /api/users/:id`, `POST /api/users/deleteMany`
- **Chats**: `GET/POST /api/chats`, `DELETE /api/chats/:id`, `POST /api/chats/deleteMany`
- **Messages**: `GET/POST /api/chats/:chatId/messages`

Example with `fetch` or Tanstack Query:
```ts
// List users
const { data: { items: users, next } } = await api<{ items: User[]; next: string | null }>('/api/users?limit=10');

// Create chat
const newChat = await api<Chat>('/api/chats', { method: 'POST', body: JSON.stringify({ title: 'My Chat' }) });
```

### Custom Routes
Extend `worker/user-routes.ts`:
```ts
import { userRoutes } from './user-routes';
userRoutes(app);  // Auto-loaded by worker/index.ts
```

### Custom Entities
1. Define in `worker/entities.ts` extending `IndexedEntity`:
```ts
export class MyEntity extends IndexedEntity<MyState> {
  static readonly entityName = 'myentity';
  static readonly indexName = 'myentities';
  // Add methods
}
```
2. Add routes in `worker/user-routes.ts`
3. Seed data via `static seedData`

### Frontend Customization
- Pages: `src/pages/`
- Components: `src/components/` (use shadcn/ui)
- Hooks: `src/hooks/`
- API client: `src/lib/api-client.ts`

## ☁️ Deployment

Deploy to Cloudflare Workers with full SPA asset bundling:

```bash
bun deploy
```

Or manually:
```bash
bun build  # Builds assets to dist/
wrangler deploy
```

[[cloudflarebutton]]

**Production Tips**:
- Set custom domain in Wrangler dashboard
- Enable Observability (pre-configured)
- Use `wrangler tail` for logs
- Assets served as SPA (404s routed to `index.html`)

## 🧪 Testing & Linting
```bash
bun lint     # ESLint
bun build    # Type check + build
```

## 🤝 Contributing
1. Fork & clone
2. `bun install`
3. Create feature branch
4. `bun dev` for testing
5. PR with clear description

## 📄 License
MIT License - see [LICENSE](LICENSE) for details.

## 🙌 Support
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Hono](https://hono.dev/)
- [shadcn/ui](https://ui.shadcn.com/)

Built with ❤️ for Cloudflare Developers