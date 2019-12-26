const {
  ArrayManipulation,
  ArrayCreation,
  ArraySorting
} = require("algoritool");

// ****************
// *** Exported ***
// ****************

const pickNumbers = (from, to, size) => {
  const sequence = ArrayCreation.sequence(to - from + 1, from);
  return pickRandom(sequence, size);
};

const pickHexColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const pickRandom = (arr, n = 1) => {
  let arrLength = arr.length;

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * arrLength);
    const item = arr[randomIndex];
    arrLength--;
    arr[randomIndex] = arr[arrLength];
    arr[arrLength] = item;
  }

  return arr.slice(-n);
};

const priorityGroups = (arr, numOfGroups, attr = "priority") => {
  shuffledArray = ArrayManipulation.shuffle(arr);
  const arrSorted = ArraySorting.byAttribute(shuffledArray, attr);
  const groups = [];
  let index = 0;
  while (arrSorted.length > 0) {
    const element = arrSorted.pop();

    const groupIndex = index % numOfGroups;
    if (!groups[groupIndex]) {
      groups[groupIndex] = [];
    }

    groups[groupIndex].push(element);

    index++;
  }
  return groups;
};

const groups = (arr, numOfGroups) => {
  shuffledArray = ArrayManipulation.shuffle(arr);
  const chunkSize = shuffledArray.length / numOfGroups;
  arrayChunks = ArrayManipulation.chunksSplit(shuffledArray, chunkSize);
  return arrayChunks;
};

const generateString = () =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

module.exports = {
  pickNumbers,
  pickRandom,
  pickHexColor,
  priorityGroups,
  groups,
  generateString
};
