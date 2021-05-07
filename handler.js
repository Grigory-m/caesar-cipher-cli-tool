const stream = require('./stream');

const handler = (options) => {
  const { shift, action } = options;
  if (!shift || !action) {
    process.stderr.write('Error: the "shift" or "action" option is missed!\n');
    process.exit(1);
  }
  stream(options);  
}

module.exports = handler;