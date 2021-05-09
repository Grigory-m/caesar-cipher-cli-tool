const parseShift = (value) => {
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
    return 0;
  }
  return value;
}

module.exports = parseShift;