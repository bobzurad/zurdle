# Zurdle

Zurdle is a variant of Wordle that can be played solo, or with two players sharing the same device.

Zurdle is a [Next.js](https://nextjs.org) project that was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Some important libraries/packages that this project uses includes:

- State Management: [Jotai](https://jotai.org)
- UI Framework: [Ant Design](https://ant.design)

TODO: Write unit tests for the following cases and ensure that the tiles are properly colored. 

* Solution: HORSE
  * Guess: FLOOR
  * Guess: BOOMS
* Solution: VIVID
  * Guess: VIVDI

## Prerequisites

For development, this project only requires that you have [NodeJS](https://nodejs.org/) installed.

## Running

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building

Use Next.js to build the project by running:

```bash
npm run build
```

## Testing

### Unit Tests

Vitest is used for Unit Testing. To run unit tests:

```bash
npm run test
```

### E2E Tests

Playwright