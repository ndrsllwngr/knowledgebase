# Python
## Pyenv (Python Version Management)
Manage multiple python versions comfortably
### Installation
1. Install via [Homebrew](https://brew.sh)
```sh 
brew update
brew install pyenv
```
2.   **Add `pyenv init` to your shell** to enable shims and autocompletion.
   Please make sure `eval "$(pyenv init -)"` is placed toward the end of the shell
   configuration file since it manipulates `PATH` during the initialization.
```sh
echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.zshrc
```
    
- **Bash note**: Modify your `~/.bash_profile` file instead of `~/.zshrc`.

3. Restart shell
```sh 
source ~/.zshrc
```
### Usage

#### Download specific python version
```sh 
pyenv install 3.5.0
```

#### List available python versions
```sh 
pyenv versions
```

### Activate version locally
```sh 
pyenv local 3.x.x
```
### Activate version global
```sh 
pyenv global 3.x.x
```


## Virtual environments
### Create virtual environment & activate it
```sh 
python3 -m venv venv 
source venv/bin/activate
```

### Deactivate virtual environment
```sh 
deactivate
```

### Install requirements
```sh 
pip install -r requirements.txt 
```
    
### Uninstall virtual environment
1. *(Optionally)* Deactivate venv
```sh 
deactivate
```
2. Remove venv folder
```sh 
rm -rf venv 
```
