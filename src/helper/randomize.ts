/**
 * @description Create an array of random numbers between min and max non repeating
 * @param {number} amount - The amount of numbers to generate 
 * @param {number} min - The minimum number of the range
 * @param {number} max - The maximum number of the range
 * @returns {number[]} Array of random numbers between min and max non repeating
 */
const getRandomCellsToClear = (amount: number, min: number, max: number): number[] => {
  const array: number[] = [];
  while (array.length < amount) {
    const randomNumber = randomize(min, max);

    // If the number is not in the array, add it
    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
    }
  }
  return array;
};

// Create a random number between min and max
const randomize = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { getRandomCellsToClear };
