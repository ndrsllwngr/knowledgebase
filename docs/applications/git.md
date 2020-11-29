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

### SSH
In order to be able to communicate with your repositories via SSH you need to first generate a new SSH key (if you haven't already) and add it to your GitHub, bitBucket etc. account.

#### Generate SSH key
```shell
# This generates a new ssh key which will be stored in your ~/.ssh/ folder. 
# Hint: you will be asked if you want to set a passphrase aka. a password for your ssh key which you will be asked everytime you use it. This is optional.
ssh-keygen -t rsa -C "your_email@example.com"

# Show your ssh (public) key
cat ~/.ssh/id_rsa.pub
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

#### Undo last commit locally (keep changes)
```shell
git reset --soft HEAD^
```

#### Reset local branch (throw away changes)
```shell
git reset --hard HEAD^
```

#### Delete branch
```shell
// delete locally
git branch -d your_local_branch_name

// delete remotely
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


## Resources
- [https://git-scm.com/book/en/v2](https://git-scm.com/book/en/v2)
- [http://ohshitgit.com/](http://ohshitgit.com/)
- [https://nvie.com/posts/a-successful-git-branching-model/](https://nvie.com/posts/a-successful-git-branching-model/)
- [https://support.gitkraken.com/git-workflows-and-extensions/git-flow](https://support.gitkraken.com/git-workflows-and-extensions/git-flow)
- [https://learngitbranching.js.org/](https://learngitbranching.js.org/)
