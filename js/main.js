const randomiseNumber = (minNumber, maxNumber) => {
  if (minNumber < 0 || maxNumber < 0 || minNumber >= maxNumber) {
    return;
  }
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

const checkLength = (string, maxLength) => {
   return string.length <= maxLength;
}

