//for
for(let i = 0; i < 10; i++) {
    console.log(`Number: ${i}`);
};
//--------------------------------------------------------
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        console.log(`I am ${i}`);
    }else {
        console.log(`Number: ${i}`);
    }
};
//--------------------------------------------------------
for(let i = 0; i < 10; i++) {
    if(i % 2 === 0) {
        console.log(`Number ${i} is even`)
    }else {
        console.log(`number ${i} is odd`);
    }
};
//--------------------------------------------------------
const products = ['Pants', 'shirt', 'Shoes'];

for (let i = 0; i < products.length; i++) {
    console.log(`${products[i]} added to the basket`)
};
//--------------------------------------------------------

// while
let i = 0;
while(i < 10) {
    console.log(`Number: ${i}`);
    i++;
};
//--------------------------------------------------------
let song = ['song 1', 'song 2', 'song 3'];
let j = 0;
while(j < song.length) {
    console.log(`Listen to the ${song[j]}`);
    j++;
};
//--------------------------------------------------------
let k = 11;
do {
    console.log(`Number: ${k}`);
    k++;
}while(k < 10);
//--------------------------------------------------------
// forEach
let skills = ['Python', 'C', 'JavaScript', 'More'];

skills.forEach(function(skill, index) {
    console.log(`${index}: ${skill}`);
});
/**
 * 0: Python
 * 1: C
 * 2: JavaScript
 * 3: More
 */
//--------------------------------------------------------
//map
let cart = [
    {id: 1, product: 'Book'},
    {id: 2, product: 'Shirt'},
    {id: 3, product: 'Pen'},
    {id: 4, product: 'Tablet'},
];

let name_product = cart.map(function(cart){
return cart.product;
});

console.log(name_product); // ['Book', 'Shirt', 'Pen', 'Tablet']
//----------------------------------------------------------------
let cars = {
    model: 'Mustang',
    color: 'Blue',
    age: 2010,
    engine: 6.1
};

for(let auto in cars) {
console.log(`${auto}: ${cars[auto]}`);
};

/**
model: Mustang
color: Blue
age: 2010
engine: 6.1
*/