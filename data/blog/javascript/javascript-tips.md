---
title: 'Js Tips'
date: 2021-12-21T23:23:05+07:00
draft: false
featured: false
categories:
  - 'JavaScript'
series: 'JavaScript Series'
tags:
  - 'JavaScript'
  - 'Tips'
summary: 'Some Tips for JavaScript'
---

# Comma Operator

The comma operator is used to evaluate mutiple expressions in one line.

```javascript
for (var i = 0, j = 10; i <= 5; i++, j++) {
  console.log(`Floor no: ${i} Flat no: ${j}`)
}
```

# New Operator

Lets developers create an instace of user-defined object type or of one of the built-oin object types that has a constructor function.

```javascript
function User(name, age) {
  this.name = name
  this.age = age
}

var admin = new User('Mike', 29)
console.log(admin)
console.log(admin.name)
```

# Delete Operator

The JavaScript delete operator removes a property from an object, if no more references to the same property are held, it is eventually released automatically.

```javascript
var admin = {
  name: 'Mike',
  age: 29,
}

console.log(admin.name)

delete admin.name

console.log(admin.name)
```

# In Operator

```javascript
var admin = {
  name: 'Mike',
  age: 29,
}

console.log('name' in admin)
console.log('job' in admin)
```
