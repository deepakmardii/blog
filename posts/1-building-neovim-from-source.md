---
title: "Building Neovim from source"
subtitle: "Building Neovim: A Comprehensive Guide."
date: "1 Jan, 2024"
---

Neovim is a highly customizable and lightweight text editor (it can be configured to something much more!)
While it may be installed to your system by using your favorite package manager, it is best used if you build it from source!
So enough talking and let’s start building 🧱!

Alright, let’s get our hands dirty and build Neovim from scratch!

## Prerequisites

Before we dive in, make sure your system is ready by installing some essential dependencies. On Ubuntu/Debian, fire up your terminal and run:

### For Ubuntu/Debian

```
sudo apt-get update
sudo apt-get install ninja-build gettext libtool libtool-bin autoconf automake cmake g++ pkg-config unzip curl doxygen
```

### For CentOS/RHEL/Fedora

```
sudo yum -y install ninja-build libtool autoconf automake cmake gcc gcc-c++ make pkgconfig unzip patch gettext curl
```

### For openSUSE

```
sudo zypper install ninja libtool autoconf automake cmake gcc-c++ gettext-tools curl
```

### For Arch Linux

```
sudo pacman -S base-devel cmake unzip ninja tree-sitter curl
```

### For Alpine Linux

```
apk add build-base cmake automake autoconf libtool pkgconf coreutils curl unzip gettext-tiny-dev
```

### For Void Linux

```
xbps-install base-devel cmake curl git
```

### For FreeBSD

```
sudo pkg install cmake gmake libtool sha automake pkgconf unzip wget gettext curl
```

### For OpenBSD

```
doas pkg_add gmake cmake libtool unzip autoconf-2.69p2 automake-1.15p0 curl
export AUTOCONF_VERSION=2.69
export AUTOMAKE_VERSION=1.15
```

### For MacOS/Homebrew

```
brew install ninja libtool automake cmake pkg-config gettext curl
```

### Building neovim

Once you have installed the dependencies, you can start building Neovim. The following steps will guide you through the process:

1. Clone the Neovim repository

```
git clone https://github.com/neovim/neovim.git
```

2. Navigate to the cloned repository

```
cd neovim
```

3. Build neovim

```
make CMAKE_BUILD_TYPE=RelWithDebInfo
```

This might take some time, so while you wait, you can go get a cup of Mocha ☕

1. Install Neovim system-wide Great! You’ve built neovim. But now, you need to install it on your system

```
sudo make install
```

2. Now if that’s finished you should be able to start Neovim by typing `neovim` in your terminal of choice.
   If Neovim is successfully installed, this command should start the editor.

That’s it! You’ve successfully built neovim from the source!

4. Run neovim

```
nvim
```

If Neovim is successfully installed, this command should start the editor.

Congratulations, you have successfully built Neovim from the source!
