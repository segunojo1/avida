### Avida
Avida is an interactive mood board with draggable cards where people write what they want to do before a certain age.

# Technologies
- Nextjs
- Tailwind CSS
- Neon Postgres DB
- Drizzle ORM
- Next Auth

## Getting Started

First,install dependencies:
```bash
npm install
```

then run

```bash
npm run dev
```

```ts .env.local 
AUTH_SECRET=your next auth secret
GOOGLE_CLIENT_ID=your google client id
GOOGLE_CLIENT_SECRET=your google client secret
DATABASE_URL=your neon db url
NEXT_PUBLIC_API_ENDPOINT=http://localhost:3000

```

## Features of Avida
- Sign in as guest or with google
- Create a dreamcard saying what you wanna do 
- View all draggable dreamcards from anonymous users
- View all your dreamcards(my entries)

# THATS IT!:/