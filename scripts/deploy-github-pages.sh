#!/bin/bash

git checkout gh-pages

npm run export

touch out/.nojekyll

git add -f out

git commit -m "Deploy Github Page"

git push -f origin gh-pages

# git commit -m "Deploy Github Page at `date +'%Y-%m-%d %H:%M:%S'`"

# git subtree push --prefix out origin gh-pages