# k'fe-app — Client

Frontend built with **Nuxt 4** (Vue 3). **Develop with Docker.**

## Requirements

- Docker + Docker Compose

## Get started

```bash
cd client
cp .env.example .env
docker compose up --build
```

Open **http://localhost:3000**

## Install a package

```bash
docker compose exec client npm install <package>
docker compose exec client npm install -D <package>   # dev only
```

After pulling new code that changes `package.json`:

```bash
docker compose exec client npm install
```

## Common commands

| Task                | Command                                       |
| ------------------- | --------------------------------------------- |
| Start dev           | `docker compose up`                           |
| Stop                | `docker compose down`                         |
| Reset everything    | `docker compose down -v`                      |
| Run any npm script  | `docker compose exec client npm run <script>` |
| Open a shell        | `docker compose exec client sh`               |

## Environment variables

Copy `.env.example` → `.env`. Current keys:

| Key                 | Purpose            |
| ------------------- | ------------------ |
| `NUXT_BASE_API_URL` | Backend REST URL   |
| `NUXT_BASE_WS_URL`  | Backend WebSocket  |

## Project layout

```
client/
├── app/app.vue         # Root component
├── public/             # Static files
├── docker/             # Dockerfiles (dev + prod)
├── nuxt.config.ts
└── package.json
```

## Troubleshooting

**Permission error on `.nuxt`** → `docker compose down -v && docker compose up --build`

**Port 3000 in use** → change the host port in [`docker-compose.yaml`](docker-compose.yaml).

**Deps out of sync** → `docker compose down -v && docker compose up --build`

<!-- ## Workflow

1. Branch from `main`: `git checkout -b feat/my-thing`
2. Code + test inside Docker
3. Open a PR -->

Docs: [Nuxt](https://nuxt.com/docs) · [Vue](https://vuejs.org/guide/introduction.html)
