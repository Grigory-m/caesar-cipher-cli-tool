#!/usr/bin/env node
const handler = require('./handler');
const app = require('commander');

app
  .version('0.0.1')
  .option('-s --shift <shift>', 'add the shift for Caesar cipher')
  .option('-i --input <input>', 'add an input file', '')
  .option('-o --output <output>', 'add the output file', '')
  .option('-a --action <action>', 'add an action encode/decode')
  .action(options => {
    handler(options);    
  })

app.parse();

