let stringLength = (string) => {
  if (string === '') {
    return Error;
  }
  let count = string.length;
  if (count > 9) return Error;
  return count;
};

let reverseString = (string) => {
  return string.split('').reverse().join('');
};

console.log(stringLength(''));
console.log(reverseString('hello'));
module.exports = stringLength;
