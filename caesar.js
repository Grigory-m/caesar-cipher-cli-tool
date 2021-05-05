#!/usr/bin/env node
const { option } = require('commander');
const app = require('commander');
const fs = require('fs');

app
  .version('0.0.1')
  .option('-s --shift <shift>', 'add the shift for Caesar cipher')
  .option('-i --input <input>', 'add an input file', './input.txt')
  .option('-o --output <output>', 'add the output file', './output.txt')
  .option('-a --action <action>', 'add an action encode/decode')
  .action(options => {
    const { shift, input, output, action } = options;

    console.log(options)
    if (!shift || !action) {
      process.stderr.write('The "shift" or "action" option is missed!\n');
      process.exit(1);
    }
    
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
      const readStream = fs.createReadStream(input, { encoding: 'utf-8', fd });
      const writeStream = fs.createWriteStream(output);
      readStream.pipe(writeStream);           
    })   
    
  })

app.parse();

