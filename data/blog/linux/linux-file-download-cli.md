---
title: 'Linux File Download Cli'
date: 2021-12-22T14:24:02+07:00
draft: false
featured: false
categories:
  - 'Linux'
series: 'Linux Series'
tags:
  - 'Linux'
  - 'wget'
summary: 'Install and using wget in any Linux OS'
---

# Download file with cli on Linux

## Install wget on Linux

```bash
# On Ubuntu, Debian and Mint
sudo apt install wget -y

# On CentOS / RHEL / Fedora and Rocky Linux / AlmaLinux
sudo yum install wget -y

# On Gentoo Linux
sudo emerge -a net-misc/wget

# On Arch Linux
sudo pacman -Sy wget

# On OpenSUSE
sudo zypper install wget
```

**NOTE:**

The `-y` option used to prevent confirmation propts before installing any package.

## wget Download file

```bash
wget http://ftp.gnu.org/gnu/wget/wget2-2.0.0.tar.gz
```

## wget Download file with custom output

```bash
wget -O wget.zip http://ftp.gnu.org/gnu/wget/wget2-2.0.0.tar.gz
```

## wget Download mutiple files from file content

```bash
cat download-linux.txt
https://releases.ubuntu.com/20.04.3/ubuntu-20.04.3-desktop-amd64.iso
https://download.rockylinux.org/pub/rocky/8/isos/x86_64/Rocky-8.5-x86_64-dvd1.iso
https://cdimage.debian.org/debian-cd/current/amd64/iso-dvd/debian-11.2.0-amd64-DVD-1.iso
```

```bash
wget -i download-linux.txt
```

<details open>
    <summary>Table of Contents</summary>
    <ul>
        <li><a href="#" class="active">Introduction</a></li>
        <li><a href="/2/">Body</a></li>
        <li><a href="/3/">Conclusion</a></li>
    </ul>
</details>
