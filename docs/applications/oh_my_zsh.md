---
id: oh_my_zsh
title: Oh my Zsh
---

[Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh) is an open source, community-driven framework for managing your zsh configuration.

**It will not make you a 10x developer...but you may feel like one.**


## Getting started
### Prerequisites

- A Unix-like operating system: macOS, Linux, BSD. 
- [Zsh](https://www.zsh.org) should be installed. If not pre-installed (run `zsh --version` to confirm), check the following wiki instructions here: [Installing ZSH](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)
- `curl` or `wget` should be installed
- `git` should be installed (recommended v2.4.11 or higher)

### Basic Installation

Oh My Zsh is installed by running one of the following commands in your terminal. You can install this via the command-line with either `curl`, `wget` or another similar tool.

| Method    | Command                                                                                           |
|:----------|:--------------------------------------------------------------------------------------------------|
| **curl**  | `sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"` |
| **wget**  | `sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`   |
| **fetch** | `sh -c "$(fetch -o - https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"` |

## Configuration
In order to configure your (oh my) zsh in almost all cases you will modify your ~/.zshrc file. \

**Important:** Don't forget to apply your changes so they take effect: 
```sh 
source ~/.zshrc
```


**Pro tip:** use *nano* instead of vim:
```shell
nano ~/.zshrc
```


### Plugins

Oh My Zsh comes with a shitload of plugins for you to take advantage of. You can take a look in the [plugins](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins) directory and/or the [wiki](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins) to see what's currently available.

##### Enabling Plugins

Once you spot a plugin (or several) that you'd like to use with Oh My Zsh, you'll need to enable them in the `.zshrc` file. You'll find the zshrc file in your `$HOME` directory. Open it with your favorite text editor and you'll see a spot to list all the plugins you want to load.

```shell
nano ~/.zshrc
```

For example, this might begin to look like this:

```shell
plugins=(
  git 
  zsh-autosuggestions
  zsh-syntax-highlighting
)
```

_Note that the plugins are separated by whitespace (spaces, tabs, new lines...). **Do not** use commas between them or it will break._

##### Using Plugins

Each plugin includes a __README__, documenting it. This README should show the aliases (if the plugin adds any) and extra goodies that are included in that particular plugin.

##### Recommended Plugins

[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)
```shell
git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

[zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)
```shell
git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

**Important:** Don't forget to [enable your plugin](#using-plugins) by adding it to your plugins list in your ~/.zshrc file and then execute ```source ~/.zshrc``` for your changes to take effect.

### Themes

We'll admit it. Early in the Oh My Zsh world, we may have gotten a bit too theme happy. We have over one hundred and fifty themes now bundled. Most of them have [screenshots](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes) on the wiki (We are working on updating this!). Check them out!

##### Selecting a Theme

_Robby's theme is the default one. It's not the fanciest one. It's not the simplest one. It's just the right one (for him)._

Once you find a theme that you'd like to use, you will need to edit the `~/.zshrc` file. You'll see an environment variable (all caps) in there that looks like:

```shell
ZSH_THEME="robbyrussell"
```

To use a different theme, simply change the value to match the name of your desired theme. For example:

```shell
ZSH_THEME="agnoster" # (this is one of the fancy ones)
# see https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#agnoster
```

_Note: many themes require installing the [Powerline Fonts](https://github.com/powerline/fonts) in order to render properly._

Open up a new terminal window and your prompt should look something like this:

![Agnoster theme](https://cloud.githubusercontent.com/assets/2618447/6316862/70f58fb6-ba03-11e4-82c9-c083bf9a6574.png)

In case you did not find a suitable theme for your needs, please have a look at the wiki for [more of them](https://github.com/ohmyzsh/ohmyzsh/wiki/External-themes).

If you're feeling feisty, you can let the computer select one randomly for you each time you open a new terminal window.

```shell
ZSH_THEME="random" # (...please let it be pie... please be some pie..)
```

And if you want to pick random theme from a list of your favorite themes:

```shell
ZSH_THEME_RANDOM_CANDIDATES=(
  "robbyrussell"
  "agnoster"
)
```

##### Disable user@host prefix
*Append the following line to your ~/.zshrc file:*
```shell
# Remove user@host from shell
prompt_context(){}
```

##### Add PATH variables
*Append the following line(s) to your ~/.zshrc file:*
```shell
export PATH=/your/very/special/path:$PATH
# Use quotes if you like
export PATH="/your/very/special/path:$PATH"
# Or other variables
export PATH=$HOME/your/very/special/path:$PATH
```
