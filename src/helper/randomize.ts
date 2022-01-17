import React from 'react';

// Create an array of random numbers between min and max non repeating
const randomNumList = (amount: number, min: number, max: number) => {
  const array: number[] = [];
  while (array.length < amount) {
    const randomNumber = randomize(min, max);
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

export { randomize, randomNumList };
