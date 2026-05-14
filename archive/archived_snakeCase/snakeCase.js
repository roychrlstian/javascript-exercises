const snakeCase = function(str) {
  let normalized = str.replace(/\.\./g, ' ');

  if (normalized.indexOf(' ') < 0) {
    normalized = normalized.replace(/([A-Z])/g, ' $1');
  }

  return normalized
    .trim()
    .toLowerCase()
    .replace(/[,\?\.]/g, '')
    .replace(/\-/g, ' ')
    .split(' ')
    .join('_');
};

// Do not edit below this line
module.exports = snakeCase;
