# Testing todos


## Getting Started

***NB:tools used in the instructions are opinionated, here i've chosen to use pnpm/rancher/... feel free to choose the tools that you prefer (yarn, docker, podman)***


First, Make sure to install npm dependencies,(mine is [pnpm](https://pnpm.io/fr/))

```bash
pnpm install
```

Second, start a [PgSQL database container](https://hub.docker.com/_/postgres) by running the following command:

```bash
docker-compose up -d 
```
Setup the database by running theses command


```bash
 npx prisma generate
 npx prisma migrate dev
```

 your almost good to go, run your NextJS dev server :

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Tests:

We use Vitest as test runner, it's configuration is available at `vitest.config.ts`

To execute test, it simple just :

```bash
pnpm test
```

For e2e test just run : 

```bash
pnpm e2e

```

***

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

