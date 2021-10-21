const letters = ['a', 'b', 'c'];

// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++');
// }

const newArray = letters.map(item => item + '++');
const newArray2 = letters.map(item => item.length);

console.log('Original', letters);
console.log('New', newArray);
console.log('New', newArray2);