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
];
console.log('original', orders);
const respoonse= orders.map( item => item.total);
console.log('Map', respoonse);

const respoonse2= orders.map( item => {
    item.tax = 0.19;
    return item;
});
console.log('original', orders);
console.log('Map', respoonse);
console.log('Map2', respoonse2);

const respoonse3= orders.map( item => {
    item.tax = 0.19;
    return {
        ...item,
        tax: 0.19,
        total: item.total + 5
    };
});

console.log('original', orders);
console.log('Map3', respoonse3);