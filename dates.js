// date object
const day = new Date();
console.log(day);
console.log(day.getMonth());
console.log(day.getDate());
console.log(day.getDay());
console.log(day.getFullYear());
console.log(day.getMinutes());
console.log(day.getHours());
console.log(day.getTime());

console.log(day.getFullYear());
day.setFullYear(2030);
console.log(day.getFullYear());


let day_zero = new Date('03-21-2020');
console.log(day_zero);