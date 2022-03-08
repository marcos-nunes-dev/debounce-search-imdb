# CIE - Code Assessment

Project developed for the CIE, Frontend challenge.

## **Considerations and Improvements**

overall i did it as fast as i can because the weekend i will have some personal commitments.
I hope that what I managed to develop in 1 day is enough to complete the challenge.

The project can be better handled so that the components work more decoupled as
in the case of SelectedAuthors. Test coverage can also be better. And a few others
improvements.

---

## The project

-   [Typescript](https://www.typescriptlang.org) - Project base
-   [Testing Library](https://testing-library.com) - Jest based testing utilities.
-   [Styled Components](https://styled-components.com) - Styling
-   [Styled System](https://styled-system.com) - Component base design for styling
-   [Styled Tools](https://github.com/diegohaz/styled-tools) - Interpolation functions for styling
-   [Antd](https://ant.design/docs/react/introduce) - React UI Library

and I just used a few others things like: Next.js, husky, esLint, axios, react truncate, lodash and etc.

## Installation

requires [Node.js](https://nodejs.org/) v10+ to run.

Create a .env file in root folder based on .env-sample

```sh
NEXT_PUBLIC_IMDB_ENDPOINT="https://api.themoviedb.org" // api endpoint
NEXT_PUBLIC_IMDB_BEARER_TOKEN="" // bearer auth option used in this demo
NEXT_PUBLIC_IMDB_KEY_TOKEN="" // if in the future we needed param auth
```

Install the dependencies and devDependencies

```sh
yarn
npm install
```

For development

```sh
yarn dev
```

For production

```sh
yarn build
```

some others commands

```sh
yarn test // run jest unit tests
yarn coverage // generates coverage report
yarn lint:fix // runs eslint
```
