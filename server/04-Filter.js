const words = ['spray', 'limit', 'elite', 'exuberante'];

const newArray = [];

for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if(element.length >= 6){
        newArray.push(element);
    }
}

console.log('Nuevas',newArray);
console.log('orignal',words);

const filter = words.filter( item => item.length >= 6)
console.log('Filter', filter);


const orders = [{
    customerName: "Nicolas",
    total: 60,
    delivered: true,
},
{
    customerName: "Zulema",
    total: 120,
    delivered: false,
},
{
    customerName: "Santiago",
    total: 180,
    delivered: true,
},
{
    customerName: "Valentina",
    total: 240,
    delivered: true,
},
{
    customerName: "Valentina Dos",
    total: 200,
    delivered: false,
},
];

const filtro = orders.filter( item => item.delivered && item.total >= 100);
console.log('Obejtos', filtro);

const buscar = ( query ) => {
    return orders.filter( item => {
        return item.customerName.includes(query);
    });
}

console.log(buscar('asdas'));
