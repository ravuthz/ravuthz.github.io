#!/bin/bash

# git checkout gh-pages

npm run export

touch out/.nojekyll

git add -f out

git commit -m "Deploy Github Page at `date +'%Y-%m-%d %H:%M:%S'`"

git push origin `git subtree split --prefix out master`:gh-pages --force

# git push -f origin gh-pages

# git subtree push --prefix out origin gh-pages



# "export": "run-script-os",
# "export:win32": "SET NODE_OPTIONS=--max_old_space_size=4096 && npm run build && next export",
# "export:default": "export NODE_OPTIONS=--max_old_space_size=4096 && npm run build && next export",

# "postexport": "run-script-os",
# "postexport:win32": "echo \"\" > out\\.nojekyll",
# "postexport:default": "touch out/.nojekyll",