const elements = ['Fire', 'Air','Water'];
const separador = '--';
let rtaFinal = '';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separador; 
}
console.log('for', rtaFinal);

const rta = elements.join('--')
console.log('Join',rta);

const title = 'Curos de manipulacion de Arrays';

const titleFinal = title.split(' ').join('/').toUpperCase();

console.log('split', titleFinal);