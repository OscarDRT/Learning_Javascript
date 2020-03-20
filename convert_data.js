// String to number
const num1 = '50',
      num2 = 10,
      num3 = 'tres';

console.log('Java' + 'Script'); // JavaScript

console.log(num1 + num2); // 5010
console.log(num1 - num2); // 40
console.log(Number(num1) + num2); // 60
console.log(parseInt(num1) + num2); // 60

console.log(typeof num1); // string
console.log(typeof Number(num1)); // number

console.log(typeof num3); // string
console.log(typeof Number(num3)); // number
console.log(Number(num3)); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(parseInt('100')); // 100
console.log(parseInt('100.123')); // 100
console.log(parseFloat('100.123')) // 100.123

//toFixed
let data = 123.456;
console.log(data.toFixed()); // 123
console.log(data.toFixed(1)); // 123.5
console.log(data.toFixed(2)); // 123.46
console.log(data.toFixed(3)); // 123.456

data = '12345.6789';
console.log(parseFloat(data).toFixed(1)); // 12345.7
//---------------------------------
//---------------------------------

// number to string
let postal;
postal = 50050;
console.log(postal.length); /// Undefined
console.log(String(postal).length); // 5

let dat = true;
console.log(dat.length); // undefined
console.log(String(dat).length); // 4

let data2 = [1,2,3];
console.log(typeof data2); //object
data2 = data2.toString();
console.log(typeof data2); // string
console.log(data2.length);