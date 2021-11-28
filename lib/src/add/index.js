export const add = (numArray) => {
  const total = numArray.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  return total;
};
