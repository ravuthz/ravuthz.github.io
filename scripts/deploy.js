#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const pages = require('gh-pages')
const moment = require('moment')

// Get input arguments
const { env, argv: args, platform } = process

// set NODE_OPTS = "--max_old_space_size=8000" && yarn dep

// console.log(`Deploying ...`)
// console.log({ args, platform })

// const projectPath = path.resolve(process.cwd(), '<path>')
const now = moment().format('Y-m-d HH:mm:ss')
const rootPath = path.dirname('..')
const distPath = path.resolve(rootPath, 'out')
const filePath = path.resolve(distPath, '.nojekyll')

console.log({ now, args, platform, rootPath, distPath, filePath })
//
try {
  console.log('Add file "out/.nojekyll"')
  fs.writeFileSync(filePath, '')
} catch (err) {
  console.error(err)
}
