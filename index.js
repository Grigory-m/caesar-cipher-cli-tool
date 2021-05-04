#!/usr/bin/env node
const { program } = require('commander');
program.version('0.0.1');

program
  .option('-s, --shift <shift>', 'add the shift for Caesar cipher', 0)
  .option('-i, --input <inputFile>', 'add an input file')
  .option('-o, --output <outputFile>', 'add the output file')
  .option('-a, --action <action>', 'add an action encode/decode');

const options = program.opts();
console.log(options)

program.parse();

