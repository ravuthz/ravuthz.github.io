---
title: 'Python Dependency Manger'
date: 2021-12-22T13:34:16+07:00
draft: false
featured: false
categories:
  - 'Python'
series: 'Python Series'
tags:
  - 'Python'
summary: 'Using Peotry for Python Dependency Management'
---

# Python Dependency Management with Peotry

Poetry helps us declare, manage and install dependencies of Python projects, ensuring you have the right stack everywhere.
It's supports Python version 3.6+.

# Installation

The complete documentation is available on the [official website](https://python-poetry.org/docs/#installation).

## Linux / OSX / Bash on Windows ( WSL ) instructions

```bash
curl -sSL https://install.python-poetry.org | python3 -
```

## Window - Powershell instructions

```bash
(Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | python -
```

```bash
peotry install prettytable
```
