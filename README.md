# Zurdle

Zurdle is a variant of Wordle that can be played solo, or with two players sharing the same device.

Zurdle is a [Next.js](https://nextjs.org) project that was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Some important libraries/packages that this project uses includes:

- State Management: [Jotai](https://jotai.org)
- UI Framework: [Ant Design](https://ant.design)
- Unit Tests: [Vitest](https://vitest.dev)
- End-to-End Tests: [Playwright](https://playwright.dev)

## Prerequisites

For development, this project only requires that you have [NodeJS](https://nodejs.org/) v22 or later installed.

## Building and Running

To run the project in development mode, run:

```bash
npm run dev
```

To run the project in production mode, run:

```bash
npm run build
npm run start
```

The application is available at: [http://localhost:3000](http://localhost:3000)

## Testing

### Unit Tests

[Vitest](https://vitest.dev/) is used for Unit Testing. To run unit tests:

```bash
npm run test
```

### E2E Tests

[Playwright](https://playwright.dev/) is used for End-to-End (E2E) tests. To run the E2E tests, run:

```bash
npm run build
npm run start
``` 

Then open a new terminal window and run:

```bash
npx playwright test
```