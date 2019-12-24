const {
  ArrayManipulation,
  ArrayCreation,
  ArraySorting
} = require("algoritool");

// ****************
// *** Exported ***
// ****************
const shuffle = array =>
  ArrayManipulation.clone(array).sort(() => Math.random() - 0.5);

const pickNumbers = (from, to, size) => {
  const sequence = ArrayCreation.sequence(to - from + 1, from);
  const shuffled = shuffle(sequence);
  return shuffled.slice(0, size);
};

const pickHexColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const priorityGroups = (arr, numOfGroups, attr = "priority") => {
  arr = ArrayManipulation.clone(arr);
  shuffledArray = shuffle(arr);
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
  shuffledArray = shuffle(arr);
  const chunkSize = shuffledArray.length / numOfGroups;
  arrayChunks = ArrayManipulation.chunksSplit(shuffledArray, chunkSize);
  return arrayChunks;
};

const random = arr => arr[Math.floor(Math.random() * arr.length)];

const generateString = () =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

module.exports = {
  shuffle,
  pickNumbers,
  pickHexColor,
  priorityGroups,
  groups,
  random,
  generateString
};
