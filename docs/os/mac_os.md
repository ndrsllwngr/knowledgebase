---
id: macos
title: macOS
---

## About
> macOS (/ˌmækoʊˈɛs/; previously Mac OS X and later OS X) is a series of proprietary graphical operating systems developed and marketed by Apple Inc. since 2001. It is the primary operating system for Apple's Mac computers.
> [(Wikipedia, 2020)](https://en.wikipedia.org/wiki/MacOS)

- https://www.apple.com/macos/

## Reinstall macOS
### Backup current installation
- [ ] Export bookmarks and browser extensions
- [ ] Backup user folder (incl. Documents, Downloads, Pictures, Videos, Music, Desktop)
- [ ] Safe all licenses &/ keys left
- [ ] Sync git repositories
- [ ] Sync cloud services
- [ ] *Screenshot System Preferences*

### Create bootable installer for macOS 
[https://support.apple.com/en-us/HT201372](https://support.apple.com/en-us/HT201372)
#### Download macOS from the App Store
1. Download macOS from the App Store. To download, use a Mac that is compatible with the version of macOS you're downloading.
2. When the macOS installer opens, quit it without continuing installation.
3. Find the installer in your Applications folder as a single ”Install” file, such as Install macOS High Sierra.

#### Use the 'createinstallmedia' command in Terminal
1. After downloading the installer, connect your Mac to the USB flash drive or other volume that will be used as the bootable installer. Make sure that it has at least 12GB of available storage.
2. Open Terminal, which is in the Utilities folder of your Applications folder.
3. Type or paste one of the following commands in Terminal. These assume that the installer is still in your Applications folder, and the name of your volume is `MyVolume`. If it's named differently, replace `MyVolume` accordingly.

macOS High Sierra (10.13):
```shell
sudo /Applications/Install\ macOS\ High\ Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume --applicationpath /Applications/Install\ macOS\ High\ Sierra.app
```
4. Press Return after typing the command.
5. When prompted, type your administrator password and press Return again. Terminal doesn't show any characters as you type your password.
6. When prompted, type `Y` to confirm that you want to erase the volume, then press Return. Terminal shows the progress as the bootable installer is created. 
7. Quit Terminal when done.

#### (optional) iCloud
- [ ] Logout iCloud at Mac

:::danger
The default macOS filesystem is case-insensitive.
:::

#### Use the bootable installer (Alternative A)
1. Connect the volume containing the bootable installer to a compatible Mac.
2. Use Startup Disk preferences or Startup Manager to select that volume as the startup disk. Learn about selecting a startup disk, including what to do if your Mac doesn't start up from it.
3. Your Mac then starts up directly to the macOS installer. Follow the onscreen instructions to install macOS.

#### Use the bootable installer (Alternative B, erase disk)
1. Connect the volume containing the bootable installer to a compatible Mac.
2. Reboot Mac and press & hold the `ALT / OPTION` key
3. Select the `Install [..]` volume
4. Start Disk Utility and erase everything and format the drive to `APFS` (previous versions used `OS X Extended` and `GUID Partition Map`)
5. Go back to the Main menu and install macOS

## Must Have Tools
### [Homebrew](https://brew.sh/index_de)
The missing package manager for macOS. \
**We have a seperate section on this [here](../applications/homebrew.md).**

#### Installation
```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### [iTerm2](https://iterm2.com/index.html)
iTerm2 is a replacement for Terminal and the successor to iTerm. It works on Macs with macOS 10.14 or newer. iTerm2 brings the terminal into the modern age with features you never knew you always wanted.


##Recommended Tools

### [JetBrains Toolbox](https://www.jetbrains.com/lp/toolbox/)
One tool to download them all. IntelliJ, PyCharm, DataGrip and all their brothers & sisters.

### [IntelliJ IDEA](https://www.jetbrains.com/idea/)
IntelliJ is a highly customizable, feature rich and well designed IDE made by developers for developers.

### [Visual Studio Code](https://code.visualstudio.com)

Code editing.Redefined. Free. Built on open source. Runs everywhere. 

**We have a seperate section on this [here](../applications/visual_studio_code.md).**

### [GitKraken](https://www.gitkraken.com)
Legendary Git GUI client for Windows, Mac & Linux

