# Project Groundswell

Utility meter reading tracker and analytics platform.

## Tech Stack

### Backend
- **Runtime:** Node.js (LTS)
- **Framework:** Express
- **Database:** MongoDB (localhost)
- **ODM:** Mongoose

### Frontend
- **Framework:** React (Vite)
- **HTTP Client:** Axios

### Language
- JavaScript with JSDoc types

## Project Structure

```
Groundswell/
├── gsw-api/          # Backend API (Express + MongoDB)
├── gsw-ui/           # Frontend UI (React + Vite)
└── README.md
```

## Data Model

- **Meter:** `{ name, kind: 'electricity' | 'water' }`
- **Reading:** `{ meter, timestamp, value, unit }`

## Port Conventions

- **API:** Port 4000
- **UI:** Port 5173 (Vite default)

## Getting Started

### Prerequisites

- Node.js (LTS version)
- MongoDB running on `localhost:27017`

### Backend Setup

```bash
cd gsw-api
npm install
npm run dev
```

API will be available at: `http://localhost:4000`

### Frontend Setup

```bash
cd gsw-ui
npm install
npm run dev
```

UI will be available at: `http://localhost:5173`

## Database

MongoDB connection string: `mongodb://127.0.0.1:27017/groundswell`

## Development

- ESLint + Prettier for code quality
- Conventional commits (e.g., `feat(api): add readings range endpoint`)
- Idempotent scripts and seeders
