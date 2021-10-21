const items = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const newarray = [];
for (let i = 0; i < items.length; i++) {
    const element = items[i];
    for (let j = 0; j < element.length; j++) {
        const element = items[i][j];
        newarray.push(element);
    }
}
console.log('for', newarray);
const rta = items.flat(3);
console.log('Flat', rta);