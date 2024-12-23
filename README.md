# Express.js Skeleton

A boilerplate Express.js project configured with modern development tools including Docker, ESLint, Husky, Prettier, and TypeScript.

## Features

- **Express.js**: Lightweight Node.js framework for building APIs and web applications.
- **TypeScript**: Strongly-typed programming language to write scalable and maintainable code.
- **Docker**: Containerized environment for consistent development and deployment.
- **ESLint**: Linting utility to enforce code quality.
- **Prettier**: Code formatter for consistent code style.
- **Husky**: Git hooks for automating tasks such as pre-commit linting.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/nkc2887Dev/express-skeleton.git
cd express-skeleton
```

### 2. Install Dependencies

Install the required dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and define the following variables:

```env
PORT=3000
NODE_ENV=development
```

### 4. Run the Project

Start the development server:

```bash
npm run dev
```

Access the application at `http://localhost:3000`.

### 5. Run with Docker

Build and run the Docker container:

```bash
docker-compose up --build
```

## Scripts

### Development

```bash
npm run dev
```
Runs the development server with hot-reloading.

### Build

```bash
npm run build
```
Compiles the TypeScript code into JavaScript.

### Start

```bash
npm start
```
Runs the compiled code.

### Lint

```bash
npm run lint
```
Runs ESLint to check for linting issues.

### Format

```bash
npm run format
```
Formats the code using Prettier.

## Project Structure

```plaintext
express-skeleton
├─ .dockerignore
├─ .prettierignore
├─ .prettierrc
├─ commitlint.config.js
├─ docker-compose.yml
├─ Dockerfile
├─ eslint.config.mjs
├─ index.ts
├─ package.json
├─ README.md
├─ src
│  ├─ @types
│  ├─ server.ts
│  └─ utils
│     └─ logger.ts
└─ tsconfig.json

```

## Tools and Configurations

### Docker

Docker is used to containerize the application for consistent development and deployment. Update the `Dockerfile` and `docker-compose.yml` as needed.

### TypeScript

The `tsconfig.json` is configured to support modern TypeScript features. Customize it based on your project requirements.

### ESLint and Prettier

ESLint and Prettier are pre-configured to ensure code quality and consistency. Adjust rules in `.eslintrc.js` and `.prettierrc` if necessary.

### Husky

Husky is set up to run linting before commits, ensuring only well-formed code is committed.

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

Happy coding!
