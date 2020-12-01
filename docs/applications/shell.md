---
id: shell
title: Shell
---

## Getting Started
We highly recommend you to use a modified shell ([Oh my Zsh](oh_my_zsh.md)) to maximise your experince usig the shell.

### Generate SSH key

```shell
# This generates a new ssh key which will be stored in your ~/.ssh/ folder. 
# Hint: you will be asked if you want to set a passphrase aka. a password for your ssh key which you will be asked everytime you use it. This is optional.
ssh-keygen -t rsa -C "your_email@example.com"

# Show your ssh (public) key
cat ~/.ssh/id_rsa.pub
```