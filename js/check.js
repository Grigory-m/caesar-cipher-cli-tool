const stream = require('./stream');

const check = (options) => {
  const { shift, action } = options;
  if (!shift || !action) {
    process.stderr.write('Error: the "shift" or "action" argument is missed!\n');
    process.exit(1);
  }
  stream(options);  
}

module.exports = check;