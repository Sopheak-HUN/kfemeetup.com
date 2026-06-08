# K'Fe App

![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt.js&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue-3-4FC08D?logo=vuedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?logo=docker&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
[![Security Policy](https://img.shields.io/badge/Security-Policy-blue.svg)](SECURITY.md)
![Code Scanning](https://img.shields.io/badge/Code_Scanning-CodeQL-blueviolet)

> The official frontend client for k'fe meetup, built with modern web technologies.

This project is built using **Nuxt 4** (Vue 3) and designed to be developed and run seamlessly using **Docker**.

## 🚀 Technologies

- **Framework**: [Nuxt 4](https://nuxt.com/) (Vue 3)
- **Testing**: [Vitest](https://vitest.dev/)
- **Environment**: [Docker](https://www.docker.com/) & Docker Compose
- **Language**: TypeScript

## 📋 Requirements

To run this project locally, ensure you have the following installed:

- Docker
- Docker Compose

## 🛠️ Get Started

1. **Fork the repository**, then **clone your fork** and navigate to the client directory:

   ```bash
   git clone https://github.com/<YOUR_USERNAME>/kfemeetup.com.git
   cd kfemeetup.com/client
   ```
2. **Set up environment variables**:

   ```bash
   cp .env.example .env
   ```
3. **Start the development server**:

   ```bash
   docker compose up --build
   ```
4. **Access the application**:
   Open **http://localhost:3000** in your browser.

## 📦 Package Management

Since the application runs inside Docker, you should run `npm` commands through the container.

**Install a new package:**

```bash
docker compose exec client npm install <package>
docker compose exec client npm install -D <package>   # for dev dependencies
```

**Sync dependencies after pulling code:**
If `package.json` was updated, run:

```bash
docker compose exec client npm install
```

## 💻 Common Commands

| Task                        | Command                                         |
| --------------------------- | ----------------------------------------------- |
| Start dev server            | `docker compose up`                           |
| Stop dev server             | `docker compose down`                         |
| Hard reset (remove volumes) | `docker compose down -v`                      |
| Run an npm script           | `docker compose exec client npm run <script>` |
| Run unit tests              | `docker compose exec client npm run test`     |
| Open a container shell      | `docker compose exec client sh`               |

## ⚙️ Environment Variables

The application relies on the following environment variables (defined in `.env`):

| Key                   | Purpose               | Example                       |
| --------------------- | --------------------- | ----------------------------- |
| `NUXT_BASE_API_URL` | Backend REST API URL  | `http://localhost:8080/api` |
| `NUXT_BASE_WS_URL`  | Backend WebSocket URL | `ws://localhost:8080/ws`    |
| `CLIENT_PORT`       | Client exposed port   | `3000`                      |

## 📁 Project Structure

```text
client/
├── app/                 # Application layout and root components
│   ├── assets/          # Uncompiled assets (images, styles)
│   ├── components/      # Vue components (auto-imported)
│   ├── composables/     # Shared Vue composables
│   ├── layouts/         # Reusable page layouts
│   ├── middleware/      # Route middleware functions
│   ├── pagedir/         # Application views and routes
│   │   └── index.vue    # Homepage view
│   ├── plugins/         # Nuxt and Vue plugins
│   ├── app.vue          # Root Vue component
│   └── error.vue        # Custom error layout
├── docker/              # Dockerfiles for dev and prod environments
├── public/              # Static public assets
├── shared/              # Shared utilities and helpers
├── tests/               # Vitest unit tests
├── nuxt.config.ts       # Nuxt framework configuration
└── package.json         # Project dependencies and scripts
```

## 🔧 Troubleshooting

- **Permission error on `.nuxt`**:
  ```bash
  docker compose down -v && docker compose up --build
  ```
- **Port 3000 already in use**:
  Update the port mapping in `docker-compose.yaml` or set `CLIENT_PORT` appropriately.
- **Dependencies out of sync**:
  ```bash
  docker compose down -v && docker compose up --build
  ```

## 🛡️ Security

Please review our [Security Policy](SECURITY.md) for information on supported versions and how to report vulnerabilities safely.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
