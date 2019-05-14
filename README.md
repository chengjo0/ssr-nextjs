# Boilerplate for NextJS + Typescript + CircleCI

Keywords: NextJS, Typescript, CircleCI, Heroku

## Overview

This project is a simple boilerplate based on the `Getting Started` from NextJS (https://nextjs.org/learn/basics/getting-started)

It integrates Typescript as well as automatic deployment to Heroku through CircleCI

## Architecture

```
  .
  |-- backend/
      |-- api/
  |-- frontend/
      |-- components/
      |-- pages/
  |-- common/
```

- backend: custom Express server
- frontend: React components

## Getting started

- Run the development server
  ```
  yarn
  yarn run start:api
  ```

## References

- https://nextjs.org/learn/basics/getting-started
- https://circleci.com/integrations/heroku
