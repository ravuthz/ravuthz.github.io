#!/usr/bin/env node

const path = require('path')
const { exec, spawn } = require('child_process')
// const util = require('util')
// const exec = util.promisify(require('child_process').exec)

// Get input arguments
const { env, argv: args, platform } = process

// set NODE_OPTS = "--max_old_space_size=8000" && yarn dep

// console.log(`Deploying ...`)
// console.log({ args, platform })

const rootPath = path.dirname('..')
// const distPath = path.resolve(rootPath, 'out')
// const filePath = path.resolve(distPath, '.nojekyll')

const execute = async (cmd, args = []) => {
  const command = `${cmd} ${args.join(' ')}`

  var child = exec(cmd, args)

  child.on('message', function () {
    process.stdout.write(`Executing command ${command}`)
  })

  child.stdout.on('data', function (data) {
    process.stdout.write(data.toString())
  })

  child.stderr.on('data', function (data) {
    process.stdout.write(data.toString())
  })

  child.on('close', function (code) {
    process.stdout.write(`Finished with code ${code}`)
  })
}
//

const deploy = async () => {
  if (platform.indexOf('win32') !== -1) {
    await execute('npm', ['run', 'export', '--colors'])
    await execute('echo', ['   ', '>', 'out\\.nojekyll', '--ansi'])
    await execute('cd', ['cd ..', '../node_modules/.bin/gh-pages', '-d out', '-t true'])
    // execute('npm run export')
    // execute('echo "" > out/.nojekyll')
    // execute('cd .. && node_modules/.bin/gh-pages.cmd -d out -t true')
  } else {
    await execute('npm run export')
    await execute('touch out/.nojekyll')
    await execute('npm run gh-pages', ['-d out', '-t true'])
  }
}

deploy()
