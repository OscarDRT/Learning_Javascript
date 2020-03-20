let num1 = 20;
let num2 = 50;
let num3 = '20';

// comparators '<'  '>'
console.log(num1 > num2); // false
console.log(20 > 50); // false
console.log(num1 < num2); // true
console.log(20 < 50); // true

/*
Comparator ==
Just compare the value
*/
console.log(num1 == num3); // true
console.log(10 == '10'); // true

/*
Comparator ===
Compares the value and type of data
*/
console.log(num1 === num3); // false
console.log(10 === '10'); // false

// Different
console.log(num1 != num2); // true
console.log(2 != '2'); // false
console.log(2 !== '2'); // true
console.log(2 != 2); // false

// With string
console.log('hello' == 'HELLO'); // false
console.log('hello' == ' hello'); // false
// weight (lesser to greater) A...Z - a...z
console.log('a' > 'b'); // false
console.log('z' > 'a'); // true
console.log('Z' > 'a'); // false
console.log('z' > 'Z'); // true

//Special
console.log(null == undefined); // true
console.log(null === undefined); // false