export const subtract = (numArray) => {
  const total = numArray.reduce((prev, curr) => {
    return prev / curr;
  }, 0);

  return total;
};
