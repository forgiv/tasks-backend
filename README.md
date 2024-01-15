# Tasks Backend

## Setup Steps

1. Clone Repo:

```bash
git clone https://github.com/forgiv/tasks-backend.git
```

2. Copy `.env.example` to `.env`

```bash
cp .env.example .env
```

3. Seed Data:

```bash
npm run seed
```

4. Run Server:

```bash
npm run dev
```

## API

Base Endpoint: `localhost:3333/api/tasks`

`GET` - `/` - Paginated Tasks\
Optional Query Params:

- `page`
- `perPage`
