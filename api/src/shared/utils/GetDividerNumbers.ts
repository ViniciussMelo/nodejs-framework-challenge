export const getDividerNumbers = (number: number): Array<number> => {
  const dividingNumbers: Array<number> = [];

  for (let i = 1; i <= number; i ++) {
    if (number % i === 0) dividingNumbers.push(i);
  }

  return dividingNumbers;
}