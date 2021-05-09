#!/usr/bin/env node
const check = require('../js/check');
const parseShift = require('../js/arguments');
const app = require('commander');

app
  .version('0.0.1')
  .option('-s --shift <shift>', 'add the shift for Caesar cipher', parseShift, 0)
  .option('-i --input [input]', 'add an input file', '')
  .option('-o --output [output]', 'add the output file', '')
  .option('-a --action [action]', 'add an action encode/decode', '')
  .action(options => {
    check(options);    
  })

app.parse();

