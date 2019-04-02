#!/usr/bin/env node

const program = require('commander')

program
  .version(require('./package').version)
  .usage('<命令> [参数]')

program
  .command('list')
  .description('列出所有模板')
  .action(() => {
    require('./commands/list').run()
  })

program.parse(process.argv)
