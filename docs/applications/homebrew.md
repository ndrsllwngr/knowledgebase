---
id: homebrew
title: Homebrew
---

## About

> Homebrew is a free and open-source software package management system that simplifies the installation of software on Apple's macOS operating system and Linux
> [(Wikipedia, 2020)](<https://en.wikipedia.org/wiki/Homebrew_(package_manager)>)

- [https://brew.sh/](https://brew.sh/)

## Getting started

#### Installation

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Useful commands

#### Keep homebrew and formulae up-to-date

```shell
# Checks your system for potential problems. Just for debugging. If everthing is working fine, don`t worry about displayed issues
brew doctor

# Fetch the newest version of Homebrew and all formulae from GitHub using git and perform any necessary migrations.
brew update

# List installed casks and formulae that have an updated version available. By default, version information is displayed in interactive shells, and suppressed otherwise.
brew outdated

# Upgrade outdated casks and outdated, unpinned formulae using the same options they were originally installed with, plus any appended brew formula options.
brew upgrade

# Remove stale lock files and outdated downloads for all formulae and casks, and remove old versions of installed formulae.
brew cleanup --prune-prefix
```

**Pro tip:** Add an alias to your .zshrc or .bashrc and combine given commands:

```shell
# Updating brew completely
alias brewall="brew doctor && brew update && brew outdated && brew upgrade && brew cleanup --prune-prefix"

```

## Resources
