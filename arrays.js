const numbers = [1,2,3,4,5,6];
console.log(numbers);

const numbers2 = new Array(1,2,3,10,20,30);
console.log(numbers2);

const mix = ['string', 1, true, undefined, null]
console.log(mix);
console.log(Array.isArray(mix)); // true

let months = ['January', 'February', 'March'];
console.log(months);
console.log(months[0]); // January

// change o add in the position n of the array
months[3] = 'April';
console.log(months);

// add at the end  of the array
months.push('May');
console.log(months);

//search element in array and return position
console.log(months.indexOf('January')); // 0
console.log(months.indexOf('Januar')); // if not -1 

months.unshift('moth 0'); // add begin
months.push('month n') // add end
console.log(months);

months.pop(); //delete end
months.shift(); //delete begin
months.splice(0,1); // splice(n,m) n position, m how many from position 
months.reverse(); // reverses the order of the array
console.log(months);

let array1 = [1,2,3],
    array2 = [4,5,6];

console.log(array1.concat(array2)); // [1,2,3,4,5,6]

// Sort an array
let numbers3 = new Array(1,2,3,10,20,30);
let fruits = ['Banana', 'Apple', 'Strawberry', 'Orange'];

// with strings
console.log(fruits);
fruits.sort();
console.log(fruits);

//whit numbres
console.log(numbers3); // 1,2,3,10,20,30

numbers3.sort();
console.log(numbers3); // 1,10,2,20,3,30

numbers3.sort(function(x,y){
  return x-y;
});
console.log(numbers3); // 1,2,3,10,20,30
