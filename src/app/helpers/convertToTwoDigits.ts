const convertToTwoDigits = (number: number) => {
  return (number < 10 ? '0' : '') + number.toString();
};

export default convertToTwoDigits;
