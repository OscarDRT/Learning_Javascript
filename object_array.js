let cars = [
    {model: 'Mustang', color: 'Blue'},
    {model: 'Camaro', color: 'Red'},
    {model: 'Challenger', color: 'Black'},
];

console.log(cars.length) // 3

for(let i = 0; i < cars.length; i++){
console.log(`${cars[i].model} ${cars[i].color}`);
}