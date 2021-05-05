#!/usr/bin/env node
const app = require('commander');
const fs = require('fs');

app
  .version('0.0.1')
  .option('-s --shift <shift>', 'add the shift for Caesar cipher')
  .option('-i --input <input>', 'add an input file', './encoded.txt')
  .option('-o --output <output>', 'add the output file', './decoded.txt')
  .option('-a --action <action>', 'add an action encode/decode')
  .action(options => {
    const { shift, input, output, action } = options;
    fs.open(input, 'r', (err, fd) => {
      if (err) {
        if (err.code === "EEXIST") {
          console.error('myfile already exists');
          return;
        } else {
          process.stderr.write('File doesn\'t exist or not accessible, please ensure that path is correct.\n');
        }
      }
      console.log(fd)
    })
    
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

