---
id: node_js
title: Node.js
---

## About

> Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts.
> [(Wikipedia, 2020)](https://en.wikipedia.org/wiki/Node.js)

- [https://nodejs.org](https://nodejs.org)

## Getting started

- [https://nodejs.org/en/docs/guides/getting-started-guide/](https://nodejs.org/en/docs/guides/getting-started-guide/)

### NVM
[nvm](https://github.com/nvm-sh/nvm) is a version manager for [node.js](https://nodejs.org/en/), designed to be installed per-user, and invoked per-shell. nvm works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and windows WSL.

#### Installation
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

#### Install latest node.js version

```sh
nvm install node # "node" is an alias for the latest version
```

#### Install a specific version of node

```sh
nvm install 6.14.4 # or 10.10.0, 8.9.1, etc
```

The first version installed becomes the default. New shells will start with the default version of node (e.g., `nvm alias default`).

#### List all available versions

```sh
nvm ls-remote
```
#### User a specified version

```sh
nvm use node # or 6.14.4, 10.10.0, 8.9.1, etc
```

#### Run node

```sh
nvm run node --version
```

#### Run node with specific version

```sh
nvm exec 4.2 node --version
```

#### Get path where specified version was installed

```sh
nvm which 5.0
```

### YARN
[Yarn](https://yarnpkg.com) is a package manager that doubles down as project manager. Whether you work on one-shot projects or large monorepos, as a hobbyist or an enterprise user, we've got you covered.

#### Installation
```sh
npm install -g yarn
```

#### Accessing the list of commands
```sh
yarn help
```

#### Starting a new project
```sh
yarn init
```

#### Installing all the dependencies
```sh
yarn
# OR
yarn install
```

#### Adding a dependency
```sh
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

#### Adding a dependency to different categories of dependencies
```sh
yarn add [package] --dev  # dev dependencies
yarn add [package] --peer # peer dependencies
```

#### Upgrading a dependency
```sh
yarn up [package]
yarn up [package]@[version]
yarn up [package]@[tag]
```

#### Upgrading a dependency
```sh
yarn remove [package]
```

#### Upgrading Yarn itself
```sh
yarn set version latest
yarn set version from sources
```
