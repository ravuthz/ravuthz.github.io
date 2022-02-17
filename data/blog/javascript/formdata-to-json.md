---
title: 'Js FormData to JSON'
date: 2022-02-04T11:30:00+07:00
draft: false
featured: false
categories:
  - 'JavaScript'
series: 'JavaScript Series'
tags:
  - 'JavaScript'
  - 'FormData'
  - 'JSON'
  - 'Tips'
summary: 'JavaScript Convert FormData to JSON Object'
---

# Convert FormData to JSON Object in JavaScript

FormData is a useful interface for collecting data from a form.

## Sending FormData Directly

Let's create a simple login form:

```html
<form onsubmit="submitForm(event)">
  <p>
    <label>Username</label>
    <input type="text" name="username" required />
  </p>
  <p>
    <label>Password</label>
    <input type="password" name="password" required />
  </p>
  <p>
    <input type="submit" value="Login" />
  </p>
</form>
```

We need to define event submit:

```javascript
function submitForm(event) {
  // Prevent the form from submitting.
  event.preventDefault()

  // Set url for submission and collect data.
  const url = 'https://example.com/...'

  const formData = new FormData(event.target)

  console.log(formData)
  // => FormData {}

  // Submit data to server vai ajax
  const request = new XMLHttpRequest()
  request.open('POST', url)
  request.send(formData)
}
```

**_NOTE:_** **FormData {}** It's doesn't mean formData is empty. Instead, we actually have to iterate over the field individually and build an object manually.

## Convert FormData to JSON Object

```javascript
const data = {}

formData.forEach((value, key) => (data[key] = value))

console.log(data)
// => { username: 'adminz', password: '123123' }
```

We can iterate through FormData other ways

```javascript
// Create a test FormData object
var formData = new FormData()
formData.append('key1', 'value1')
formData.append('key2', 'value2')

const data = {}

// Display the key/value pairs
for (var pair of formData.entries()) {
  data[pair[0]] = pair[1]
  console.log(pair[0] + ': ' + pair[1])
  // => key1: value1
  // => key2: value2
}
console.log(data)
// => { key1: 'value1', key2: 'value2' }
```

The complete documentation is available on the [website](https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries)
