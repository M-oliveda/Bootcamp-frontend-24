// Exercise
const arr = [1, 2, 4, 4, 7, 4, 2, 1];

const arrStats = arr.reduce((accumulator, currentValue) => {
  if (accumulator.find((item) => item.number == currentValue)) {
    accumulator[
      accumulator.findIndex((item) => item.number == currentValue)
    ].n += 1;
    return accumulator;
  } else {
    return accumulator.concat({ number: currentValue, n: 1 });
  }
}, []);
const arrKeyWithOneAppear = arrStats.filter((item) => item.n == 1);
const arrResultedNumbers = arrKeyWithOneAppear.reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue.number),
  []
);

console.log(
  `The array: ${arr} has these numbers: ${arrResultedNumbers} that appears only once.`
);
