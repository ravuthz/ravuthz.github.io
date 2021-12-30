#!/bin/bash

# git checkout gh-pages

npm run export

touch out/.nojekyll

git add -f out

git commit -m "Deploy Github Page at `date +'%Y-%m-%d %H:%M:%S'`"

git push origin `git subtree split --prefix out master`:gh-pages --force

# git push -f origin gh-pages

# git subtree push --prefix out origin gh-pages

