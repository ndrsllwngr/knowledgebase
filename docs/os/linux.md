---
id: linux
title: Linux
---

## Ubuntu 20.04
### Update

- Update package database
```shell
sudo apt-get update
```
- Upgrade installed packages
```shell
sudo apt-get upgrade
```
- Update and upgrade packages
```shell
# https://explainshell.com/explain?cmd=apt-get+update+%26%26+apt-get+upgrade+-y
sudo apt-get update && sudo apt-get upgrade -y
```
- more information [https://itsfoss.com/apt-get-linux-guide/](https://itsfoss.com/apt-get-linux-guide/)

### Apple keyboard: map CTRL to CMD ([src](https://askubuntu.com/a/808588))

Install `gnome-tweaks` https://linuxhint.com/gnome_tweak_installation_ubuntu/
- Open `Tweaks`
- Go to `Keyboard & Mouse`
- Click `Additional Layout Options`
- Enable `Alt/Win key behavior`/`Ctrl is mapped to Win and the usual Ctrl keys`
