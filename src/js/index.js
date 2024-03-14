function getRandomNumber(minValue, maxValue) {
  return Math.floor(Math.random() * maxValue) + minValue;
}

const firstArray = [];

for (let i = 1; i <= 10; i++) {
  firstArray.push(getRandomNumber(1, 250));
}

const smallestNumber = firstArray.sort((numberA, numberB) => {
  if (numberA < numberB) {
    return -1;
  } else if (numberA > numberB) {
    return 1;
  }

  return 0;
})[0];

console.log(`The smallest number inside ${firstArray} is: ${smallestNumber}`);

const secondArray = [
  getRandomNumber(1, 100),
  "a",
  "b",
  "d",
  "a",
  "d",
  "d",
  getRandomNumber(1, 100),
  getRandomNumber(1, 100),
  getRandomNumber(1, 100),
];

const secondArrayStats = secondArray.reduce((acumulator, currentValue) => {
  if (acumulator.find((item) => item.key == currentValue)) {
    const itemIdx = acumulator.findIndex((item) => item.key == currentValue);
    acumulator[itemIdx].times += 1;
    return acumulator;
  } else {
    return acumulator.concat({ key: currentValue, times: 1 });
  }
}, []);

const sortedSecondArrayStats = secondArrayStats.sort((firstKey, secondKey) => {
  if (firstKey.times < secondKey.times) {
    return -1;
  } else if (firstKey.times > secondKey.times) {
    return 1;
  }
  return 0;
});

const itemWhoAppearMost =
  sortedSecondArrayStats[sortedSecondArrayStats.length - 1];

console.log(
  `The key who appears the most inside:`,
  sortedSecondArrayStats,
  ` is ${itemWhoAppearMost.key} and appears: ${itemWhoAppearMost.times} times.`
);
