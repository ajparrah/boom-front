export const isArrayOfNumbersOnly = (arrayToValidate = []) => {
  const result = arrayToValidate.every((item) => !isNaN(item));
  return result;
};
