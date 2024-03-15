// First exercise:
const arr1 = [7, 9, 1, "a", "a", "f", 9, 4, 2, "d", "d"];

const arr1WithoutDuplicates = arr1.reduce((newArray, oldItem) => {
  if (!newArray.find((item) => item == oldItem)) {
    return newArray.concat([oldItem]);
  }
  return newArray;
}, []);

console.log(arr1, arr1WithoutDuplicates);

// Second exercise:
const data = [
  ["The", "Little", "horse"],
  ["Plane", "over", "the", "ocean"],
  ["Chocolate", "ice", "cream", "is", "awesome"],
  ["this", "is", "a", "long", "sentence"],
];

const concatanedData = data.reduce((newArray, oldItem) => {
  return newArray.concat(oldItem.join(" "));
}, []);

console.log(data, concatanedData);
