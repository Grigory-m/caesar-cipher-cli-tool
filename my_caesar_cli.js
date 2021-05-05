#!/usr/bin/env node
const app = require('commander');
app
  .version('0.0.1')
  .option('-s --shift <shift>', 'add the shift for Caesar cipher')
  .option('-i --input <input>', 'add an input file', './input.txt')
  .option('-o --output <output>', 'add the output file', './output.txt')
  .option('-a --action <action>', 'add an action encode/decode')
  .action(options => {
    const { shift, input, output, action } = options;
    console.log(shift)
    if (!shift) {
      console.error('The shift is missed!')
      process.exit(1)
    }
    if (!action) {
      console.error('The action is missed!')
      process.exit(1)
    }
  })

app.parse();

