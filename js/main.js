const randomiseNumber = (minNumber, maxNumber) => {
  if (minNumber < 0 || maxNumber < 0) {
    return -1;
  }

  if (minNumber > maxNumber) {
    [minNumber, maxNumber] = [maxNumber, minNumber];
  }

  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

const checkLength = (string, maxLength) => string.length <= maxLength;

randomiseNumber(1, 10);
checkLength('', 0);

