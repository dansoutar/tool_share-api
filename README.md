# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup application

Install the node project dependencies.

```bash
cp .env.example .env
npm install
```

## Start Dev application

Use the adonis command to start the dev server.

```bash
adonis serve --dev
```

## Migrations & Seeds

Run the following command to run startup migrations and seeds.

```bash
adonis migration:refresh --seed
```
