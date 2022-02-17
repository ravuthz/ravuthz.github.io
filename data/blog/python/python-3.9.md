---
title: 'Python 3.9'
date: 2021-12-21T23:24:07+07:00
draft: false
featured: false
categories:
  - 'Python'
series: 'Python Series'
tags:
  - 'Python'
  - 'Python-3.9'
  - 'NewRealease'
summary: "What's new in Python 3.9?"
---

# Merging Dictionary

There's a new operator " | " that can be used to merge two dictionaries.

```python
dict1 = { 'a': 1, 'b': 2, 'c': 3 }
dict2 = { 'x': 10, 'y': 20, 'z': 30 }

dict3 = dict1 | dict2
print(dict3)
```

# Updating Dictionary

Another new operator " |= " will let you update dictionaries.

```python
dict1 = { 'a': 1, 'b': 2, 'c': 3 }
dict2 = { 'x': 10, 'y': 20, 'z': 30 }

dict3 = dict1 |= dict2
print(dict3)
```

# Removing the prefix and suffix of a string

There are two new methods added to the string object to remove the prefix and suffix of the string. We don't need more to rely anymore on a much more fragle approach like slicing to do this.

```python
str1 = "Hello Python 3.9"

print(str1.removeprefix('Hello '))

print(str1.removesuffix(' Python 3.9'))

print(str1.removeprefix('Not Exist'))
```

# Type hinting for built-in generic types

We can use list or dict built-in collection types as generics in the signature of a function. This makes the code much more readable and explicit

```python
def print_numbers(numbers: list[int]) -> None:
    for number in numbers:
        print(number)
```
