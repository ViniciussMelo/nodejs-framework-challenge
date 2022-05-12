export const isPrimeNumber = (number: number): Boolean => {
  for (let divisor = 2; divisor < number; divisor++) {
    if (number % divisor == 0) return false;
  }
  return true;
}