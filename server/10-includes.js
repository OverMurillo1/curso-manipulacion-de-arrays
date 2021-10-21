const pets = ['cats','dogs','bats'];
let includeInArray = false; 
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dogs') {
        includeInArray = true;
        break;
    }
}
console.log('For', includeInArray);

const rta1 = pets.includes('dogs');
console.log('includes', rta1);