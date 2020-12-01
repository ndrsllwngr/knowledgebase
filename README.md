# knowledgebase

- Snippets that save time.
- https://open-knowledgebase.vercel.app/docs/

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Contribute

### How to add knowledge?
Work on a separate branch and create a pull request.

### How to add a new topic?
1. Create a new file in `docs/<category>/<topic>.md`
2. Add a header
```md
---
id: <id>
title: <topic title>
---

## About
```
3. Add to [`/sidebar.js`](https://github.com/ndrsllwngr/knowledgebase/blob/main/sidebars.js)
4. Add to [`/docs/introduction/introduction.md`](https://github.com/ndrsllwngr/knowledgebase/blob/main/docs/introduction/introduction.md)

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
