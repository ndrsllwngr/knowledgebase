---
id: shell
title: Shell
---

## Getting Started

We highly recommend you to use a modified shell ([Oh my Zsh](oh_my_zsh.md)) to maximise your experince usig the shell.

### Get current user
```shell
whoami
```

### Show current folder content, file sizes & permissions
```shell
ll -lha
```

### Get IP address

```shell
# MacOS
ifconfig | grep "inet " | grep -v 127.0.0.1
```

### Generate SSH key

```shell
# This generates a new ssh key which will be stored in your ~/.ssh/ folder.
# Hint: you will be asked if you want to set a passphrase aka. a password for your ssh key which you will be asked everytime you use it. This is optional.
ssh-keygen -t rsa -C "your_email@example.com"

# Show your ssh (public) key
cat ~/.ssh/id_rsa.pub
```

### Create new aliases aka create your own commands

```shell
# Edit your ~/.bashrc or ~/.bashrc
nano ~/.zshrc

# Add a line similar to this one
alias my_super_cool_command="echo \"super cool command\""

# Source your config file to apply changes
source .zshrc
```

### Work with .tar archives

#### List all top level contents of tar file
```shell
tar --exclude="*/*" -tf file.tar
```

#### Extract to current folder
```shell
tar -xf archive.tar.gz
```
**Hint:** The `-v` option (e.g.`-xvf`) will make the tar command more visible and print the names of the files being extracted on the terminal. 

#### Extract to specified folder
```shell
tar -xf archive.tar.gz -C your_super_cool_folder
```

## tmux

[tmux](https://github.com/tmux/tmux/wiki) is a terminal multiplexer. It lets you switch easily between several programs in one terminal, detach them (they keep running in the background) and reattach them to a different terminal.

### Installation
```shell
sudo apt-get install tmux 
```

### Manage tmux sessions
#### Start new session
```shell
tmux
```

#### Create session with a name
```shell
tmux new -s super_cool_session_name 
```

#### View all running sessions session
```shell
tmux ls
```

#### Attach to session 
```shell
tmux attach -t super_cool_session_name 
```

#### Exit from session (without killing the session)
Press `CTRL` + `B`, now enter `d` (or `:detach`) and press `ENTER`.

#### Kill tmux server & all running sessions
```shell
tmux kill-server 
```
