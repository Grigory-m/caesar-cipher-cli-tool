const fs = require('fs');
const encryption = require('./encryption');

const stream = (options) => {
  const { shift, input, output, action } = options;  
  process.stdin.setEncoding('utf8');

  if (input && output) {
    try {
      fs.openSync(input, 'r');     
      fs.openSync(output, 'r');  
    } catch (error) {
      process.stderr.write('Error: file doesn\'t exist or not accessible, please ensure that path is correct.\n');
      process.exit(1);      
    }
        
    const readable = fs.createReadStream(input, { encoding: 'utf-8'});
    const writable = fs.createWriteStream(output, { flags: 'a'});
    readable.on('data', (chunk) => {
      if (chunk !== null) writable.write(`${encryption(chunk, shift, action)}\n`);
    })
  } else  if (!input && !output) {      
    process.stdin.on('data', (chunk) => {
      if (chunk !== null) process.stdout.write(`${encryption(chunk, shift, action)}`);
    }); 
  } else if (!input && output) {
    const writable = fs.createWriteStream(output, { flags: 'a'});
    process.stdin.on('data', (chunk) => {
      if (chunk !== null) writable.write(`${encryption(chunk, shift, action)}`);      
    }); 
  } else if (input && !output) {
    const readable = fs.createReadStream(input, { encoding: 'utf-8'});
    readable.on('data', (chunk) => {
      if (chunk !== null) process.stdout.write(`${encryption(chunk, shift, action)}`);      
    }); 
  } 
}

module.exports = stream;