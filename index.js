const {
  cloneArray,
  createSequence,
  chunkArray,
  sortByAttribute
} = require("algoritool");

// ****************
// *** Exported ***
// ****************
const shuffle = array => cloneArray(array).sort(() => Math.random() - 0.5);

const pickNumbers = (from, to, size) => {
  const sequence = createSequence(to - from + 1, from);
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
  arr = cloneArray(arr);
  shuffledArray = shuffle(arr);
  const arrSorted = sortByAttribute(shuffledArray, attr);
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
  arrayChunks = chunkArray(shuffledArray, chunkSize);
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
