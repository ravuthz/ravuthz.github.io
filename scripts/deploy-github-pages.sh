#!/bin/bash

npm run export

touch out/.nojekyll

git add -f out

git commit -m "Deploy Github Page at `date +'%Y-%m-%d %H:%M:%S'`"

# git push -f origin gh-pages

git subtree push --prefix out origin gh-pages