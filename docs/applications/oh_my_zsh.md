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
| :-------- | :------------------------------------------------------------------------------------------------ |
| **curl**  | `sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"` |
| **wget**  | `sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`   |
| **fetch** | `sh -c "$(fetch -o - https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"` |

### Recommendation: [Powerlevel10k](https://github.com/romkatv/powerlevel10k)

Powerlevel10k is a pack of extensions and a theme for for your zsh.

Install it by executing the following command:

```shell
git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k
```

Then edit your `~/.zshrc` and set `ZSH_THEME="powerlevel10k/powerlevel10k"`. Once you do so, when you start a new terminal session, the Powerlevel10 configure wizard will be launched to set your prompt, beware, there are many many options!

Powerlevel10k offers a whole lot more and is extremely configurable, best is to [check its project page](https://github.com/romkatv/powerlevel10k#extremely-customizable).

If you want to trigger the configuration wizard immediately, simply run `p10k configure` to discover all options, which are plentiful.

**Important:** Powerlevel10k will not work with standard fonts. The configuration wizzard will install a patched font called _MesloLGS NF_ which will be able to display all the cool icons & pictograms Powerlevel10k uses.

If you want to use another font or need to set _MesloLGS NF_ for your iTerm2/VS Code/IntelliJ check the [fonts](#fonts) section.

## Configuration

In order to configure your (oh my) zsh in almost all cases you will modify your ~/.zshrc file. \

**Important:** Don't forget to apply your changes after editing the config file so they take effect:

```shell
source ~/.zshrc
```

**Pro tip:** use _nano_ instead of vim:

```shell
nano ~/.zshrc
```

### Plugins

Oh My Zsh comes with a shitload of plugins for you to take advantage of. You can take a look in the [plugins](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins) directory and/or the [wiki](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins) to see what's currently available.

#### Enabling Plugins

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

#### Using Plugins

Each plugin includes a **README**, documenting it. This README should show the aliases (if the plugin adds any) and extra goodies that are included in that particular plugin.

#### Recommended Plugins

**Important:** Don't forget to [enable your plugin](#enabling-plugins) by adding it to your plugins list in your ~/.zshrc file and then execute `source ~/.zshrc` for your changes to take effect.

[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

[zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
```

### Themes

We'll admit it. Early in the Oh My Zsh world, we may have gotten a bit too theme happy. We have over one hundred and fifty themes now bundled. Most of them have [screenshots](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes) on the wiki (We are working on updating this!). Check them out!

#### Selecting a Theme

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

### Fonts

A lot of themes will include special characters, icons or even emojis. These will most probably not work out of the Box, because you need a **patched font**.

- [Source Code Pro](https://github.com/powerline/fonts/blob/master/SourceCodePro/Source%20Code%20Pro%20for%20Powerline.otf)
- [Source Code Pro + Font Awesome](https://github.com/Falkor/dotfiles/blob/master/fonts/SourceCodePro%2BPowerline%2BAwesome%2BRegular.ttf), this one is needed if you want the icons from Font Awesome as shown in the screenshot for Powerlevel10k.
- [Others @ powerline fonts](https://github.com/powerline/fonts)

Open the downloaded font and press _Install Font_.

Set this font in iTerm2 (iTerm → Preferences → Profiles → Text → Font), in the dropdown select the desired Font. You will see it change on the fly.

Restart iTerm2 for all changes to take effect.

#### Visual Studio Code

Installing a patched font will mess up the integrated terminal in VS Code unless you use the proper settings. You'll need to go to settings (CMD + ,) and add or edit the following values:

- for Source Code Pro + Font Awesome: `"terminal.integrated.fontFamily": "'SourceCodePro+Powerline+Awesome Regular'"`. The single quotes are important! Restart VS Code after the config change.
- for Source Code Pro: `"terminal.integrated.fontFamily": "Source Code Pro for Powerline"`
- for Meslo: `"terminal.integrated.fontFamily": "MesloLGs NF"`
- for other fonts you'll need to check the font name in Font Book. You can right click on them on select "Show in Finder" to get the exact name.

You can also set the fontsize e.g.: `"terminal.integrated.fontSize": 14`

#### IntelliJ/PyCharm etc.

_coming soon_

### Miscellaneous

#### Enable word jumps and word deletion, aka natural text selection

By default, word jumps (option + → or ←) and word deletions (option + backspace) do not work. To enable these, go to "iTerm → Preferences → Profiles → Keys → Presets... → Natural Text Editing → Boom! Head explodes"

#### Disable user@host prefix

_Append the following line to your ~/.zshrc file:_

```shell
# Remove user@host from shell
prompt_context(){}
```

#### Add PATH variables

_Append the following line(s) to your ~/.zshrc file:_

```shell
export PATH=/your/very/special/path:$PATH
# Use quotes if you like
export PATH="/your/very/special/path:$PATH"
# Or other variables
export PATH=$HOME/your/very/special/path:$PATH
```
