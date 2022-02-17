---
title: 'Hugo Install FontAwesome'
date: 2021-12-22T21:16:47+07:00
draft: true
featured: false
categories:
  - 'Static Site'
series: 'Static Site Series'
tags:
  - 'Hugo'
  - 'Site'
  - 'Static Site'
summary: 'Install Font Awesome in Hugo static site'
---

# Install Font Awesome in Hugo site

1. Download [font awesome](https://use.fontawesome.com/releases/v5.15.4/fontawesome-free-5.15.4-web.zip) from [official website](https://fontawesome.com/v5.15/how-to-use/on-the-web/setup/hosting-font-awesome-yourself).

```bash
cd $env:tmp

wget https://use.fontawesome.com/releases/v5.15.4/fontawesome-free-5.15.4-web.zip
curl https://use.fontawesome.com/releases/v5.15.4/fontawesome-free-5.15.4-web.zip -o fontawesome-free-5.15.4-web.zip
Invoke-WebRequest -Uri https://use.fontawesome.com/releases/v5.15.4/fontawesome-free-5.15.4-web.zip -OutFile fontawesome-free-5.15.4-web.zip
```

2. Extract download font awesome zip file to hugo's static folder

```bash
7z x fontawesome-free-5.15.4-web.zip -o"fontawesome-free-5.15.4-web"
7z x fontawesome-free-5.15.4-web.zip -o*
```

3. Add custom shortcode

```bash
mkdir -p layouts/shortcodes
echo "" > layouts/shortcodes/fa.html
```

Now we need to add a custom shortcode to hugo to make using Font Awesome easier. Add file **fa.html** to directory **layouts/shortcodes** which have content following:

```html
<!-- use default fontawesome class 'fas' or use a specified one like 'fab' for brands -->
{{ $faStylePrefix := "fas" }} {{ if in (slice "fas" "far" "fal" "fad" "fab") (.Get 0) }} {{
$faStylePrefix = (.Get 0) }} {{ end }}

<i class="{{ $faStylePrefix }} {{ range $iconName := .Params }} fa-{{ $iconName }} {{ end }}">
  <!-- Load font awesome only once per page, load it inside the <i> element
    so it does not disturb the text flow (like removing spaces) -->
  {{ if not (.Page.Scratch.Get "fontawesomeLoaded") }} {{ .Page.Scratch.Set "fontawesomeLoaded" true
  }}
  <link href="/fontawesome/css/all.min.css" rel="stylesheet" />
  {{ end }}
</i>
```
