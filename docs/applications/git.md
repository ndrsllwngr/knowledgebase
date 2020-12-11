---
id: git
title: Git
---

## About

> Git (/ɡɪt/) is a distributed version-control system for tracking changes in any set of files, originally designed for coordinating work among programmers cooperating on source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.
> [(Wikipedia, 2020)](https://en.wikipedia.org/wiki/Git)

- [https://git-scm.com/](https://git-scm.com/)

## Getting started

- [https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)

### Authentication via SSH

In order to be able to communicate with your repositories via SSH you need to first [generate a new SSH key](shell.md#generate-ssh-key) (if you haven't already) and add it to your GitHub, bitBucket etc. account.

## Create a new repository

Create a new folder, open it and perform

```shell
git init
```

to create a git repository.

## Checkout a repository

Create a working copy of a local repository

```shell
git clone /path/to/repository
```

Create a working copy of a remote repository

```shell
git clone username@host:/path/to/repository
# e.g. git clone git@github.com:ndrsllwngr/knowledgebase.git
```

## Ignore files

Add a `.gitignore` to your project. It specifies intentionally untracked files to ignore.

:::info
Use [https://www.toptal.com/developers/gitignore](https://www.toptal.com/developers/gitignore) to create useful .gitignore files for your project.
:::

## Add & commit

To propose changes (add them to Index)

```shell
git add <filename>
# or
git add *
```

To commit these changes use

```shell
git commit -m "Commit message"
```

These changes are now commited to the HEAD, but not yet to the remote repository.

## Pushing changes

To push changes to the remote repository

```shell
git push origin main
```

Change _main_ to whatever branch your changes should go to.

To add a remote repository perform

```shell
git remote add origin <server>
```

Now you are able to push changes to your remote server.

## Remove a file from Git repository

Remove a file from Git repository without deleting it from local filesystem
For a single file:

```shell
git rm --chached [filename]
```

and for a single directory:

```shell
git rm --chached -r [directory]
```

## Branching

Create a new branch named _feature_x_ and switch to it using

```shell
git checkout -b feature_x
```

Switch back to _main_

```shell
git checkout main
```

Delete the branch again

```shell
git branch -d feature_x
```

A branch is not available to others unless you push the branch to your remote repository

```shell
git push origin <branch>
```

## Update & merge

To update your local repository to the latest commit, perform

```shell
git pull
```

in your working directory to fetch and merge remote changes.

To merge another branch into your active branch (e.g. main), use

```shell
git merge <branch>
```

in both cases git tries to auto-merge changes. Unfortunately, this is not always possible and results in conflicts.
:::caution
You are responsible to merge those conflicts manually by editing the files shown by git.
:::
After changing, you need to mark them as merged with

```shell
git add <filename>
```

before merging changes, you can also preview them by using

```shell
git diff <source_branch> <target_branch>
```

## Tagging

:::warning
TODO @NDRS
:::

## Log

:::warning
TODO @NDRS
:::

## Replace local changes

### Undo last commit locally (keep changes)

```shell
git reset --soft HEAD^
```

### Git Hard Reset to HEAD (throw away changes)

- Reset local branch (throw away changes)
- The `-–hard` option is used in order to reset the files of the index (or the staging area) and of the working directory. You will be left with the untracked files of your working directory.

```shell
# (going back to HEAD)
git reset --hard HEAD

# (going back to the commit before HEAD)
git reset --hard HEAD^

# (going back two commits before HEAD)
git reset --hard HEAD~2
```

### Git Hard Reset to origin HEAD (throw away changes)

```shell
# (going back to HEAD of remote origin branch)
git reset --hard origin/develop
```

## Useful commands

#### Add local project to fresh Git(hub) repository

```shell
cd ~/your/project/path
# Initialize new local git
git init

# Add all local files to your local repositore
# Pro tip: Add/Check your .gitignore to not check in local configs like your .idea folder etc.
git add .

# Commit your files
git commit -m 'Initialize Project'

# Link your remote repository
git remote add origin git@github.com:you/your-new-project.git
```

#### Clone repository

```shell
git clone git@github.com:ndrsllwngr/knowledgebase.git
```

#### Checkout branch

```shell
git checkout branch_name
```

#### Create new (local) branch

```shell
git checkout -b incredibly_descriptive_branch_name

# Commit some changes
git add .
git commit "Very important changes"

# Push your new local branch to the remote repostory
git push --set-upstream origin incredibly_descriptive_branch_name
```

#### Delete branch

```shell
# delete locally
git branch -d your_local_branch_name

# delete remotely
git push origin --delete your_remote_branch_name
```

## Edit history

### Remove secret

- use [https://rtyley.github.io/bfg-repo-cleaner/](https://rtyley.github.io/bfg-repo-cleaner/)

### Delete folders

- [https://rtyley.github.io/bfg-repo-cleaner/](https://rtyley.github.io/bfg-repo-cleaner/)

```shell
# bfg equals java -jar bfg.jar
java -jar bfg-1.13.0.jar --delete-folders docs --no-blob-protection
git reflog expire --expire=now --all && git gc --prune=now --aggressive
```

## Useful links

- [https://git-scm.com/book/en/v2](https://git-scm.com/book/en/v2)
- [http://ohshitgit.com/](http://ohshitgit.com/)
- [https://nvie.com/posts/a-successful-git-branching-model/](https://nvie.com/posts/a-successful-git-branching-model/)
- [https://support.gitkraken.com/git-workflows-and-extensions/git-flow](https://support.gitkraken.com/git-workflows-and-extensions/git-flow)
- [https://learngitbranching.js.org/](https://learngitbranching.js.org/)
- [https://rogerdudler.github.io/git-guide/](https://rogerdudler.github.io/git-guide/)
- [https://www.atlassian.com/git/tutorials/syncing](https://www.atlassian.com/git/tutorials/syncing)
