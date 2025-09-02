# TODO API (Bun + Elysia + SQLite)

API REST de lista de tarefas para estudos, agora usando Prisma ORM com SQLite.

## Tecnologias
- Bun (TypeScript runtime)
- ElysiaJS (framework web)
- Prisma ORM + SQLite

## Como rodar
1. Instale as dependências:
   ```bash
   bun add elysia @prisma/client
   bun add -d bun-types prisma
   ```
2. Configure o banco e gere o Prisma Client:
   ```bash
   # definir o banco (arquivo .env já incluído no repositório ou crie um)
   # DATABASE_URL="file:./dev.db"

   bun run prisma:generate
   bun run prisma:migrate
   ```
3. Inicie o servidor:
   ```bash
   bun run server.ts
   ```
4. A API estará em `http://localhost:3000`.

O arquivo do banco SQLite será criado em `prisma/dev.db`.

## Endpoints
- GET `/tasks` — lista todas as tarefas
- GET `/tasks/:id` — obtém uma tarefa
- POST `/tasks` — cria tarefa
  - body JSON: `{ "description": "string" }`
- PUT `/tasks/:id` — atualiza completamente
  - body JSON: `{ "description": "string", "done": true|false }`
- PATCH `/tasks/:id` — atualiza parcialmente
  - body JSON: `{ "description"?: "string", "done"?: true|false }`
- DELETE `/tasks/:id` — remove tarefa (204)

## Exemplos (curl)
- Criar:
  ```bash
  curl -X POST http://localhost:3000/tasks \
    -H "Content-Type: application/json" \
    -d '{"description":"Estudar ElysiaJS"}'
  ```
- Listar:
  ```bash
  curl http://localhost:3000/tasks
  ```
- Obter por id:
  ```bash
  curl http://localhost:3000/tasks/1
  ```
- Atualizar (PUT):
  ```bash
  curl -X PUT http://localhost:3000/tasks/1 \
    -H "Content-Type: application/json" \
    -d '{"description":"Estudar ElysiaJS", "done": true}'
  ```
- Atualizar (PATCH):
  ```bash
  curl -X PATCH http://localhost:3000/tasks/1 \
    -H "Content-Type: application/json" \
    -d '{"done": false}'
  ```
- Remover:
  ```bash
  curl -X DELETE http://localhost:3000/tasks/1 -i
  ```
