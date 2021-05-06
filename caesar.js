#!/usr/bin/env node
const app = require('commander');
const fs = require('fs');

app
  .version('0.0.1')
  .option('-s --shift <shift>', 'add the shift for Caesar cipher')
  .option('-i --input <input>', 'add an input file')
  .option('-o --output <output>', 'add the output file')
  .option('-a --action <action>', 'add an action encode/decode')
  .action(options => {
    const { shift, input, output, action } = options;
    console.log(options)

    if (!shift || !action) {
      process.stderr.write('The "shift" or "action" option is missed!\n');
      process.exit(1);
    }
    if (!input) {
      console.log(1000)
      process.stdin.on('readable', () => {
        const chunk = process.stdin.read();
        if (chunk !== null) {
          process.stdout.write(`data: ${chunk}`);            
        }
        process.stdin.resume();
      }); 
    } else {
      fs.open(input, 'r', (err, fd) => {
        if (err) {
          if (err.code === "EEXIST") {
            console.error('myfile already exists');
            return;
          } else {
            process.stderr.write('File doesn\'t exist or not accessible, please ensure that path is correct.\n');
            process.exit(1);
          }
        } else {
          const readStream = fs.createReadStream(input, { encoding: 'utf-8', fd });
          readStream.on('readable', () => {
            const chunk = readStream.read();
            const writeStream = fs.createWriteStream(output, { flags: 'a'});
            if (chunk !== null) {
              writeStream.write(`${chunk}\n`);
            }
          })
           
        }         
      })   
    }    
    
  })

app.parse();

