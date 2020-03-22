let cities = ['Medellin', 'Bogota', 'Cali'];
let orders = new Set([123, 231, 345]);
let data = new Map();
data.set('name', 'Oscar');
data.set('profession', 'Developer');

//-------------------------------------------------
for(let inside of cities.entries()) {
  console.log(inside);
};
/**
 * [0, "Medellin"]
 * [1, "Bogota"]
 * [2, "Cali"]
 */

for(let inside of orders.entries()) {
  console.log(inside);
};
/**
 * [123, 123]
 * [231, 231]
 * [345, 345]
 */

for(let inside of data.entries()) {
  console.log(inside);
};
/**
 * ["name", "Oscar"]
 * ["profession", "Developer"]
 */
//-------------------------------------------------
for(let inside of cities) {
  console.log(inside);
};
/**
Medellin
Bogota
Cali
 */

for(let inside of orders.values()) {
  console.log(inside);
};
/**
123
231
345
 */

for(let inside of data.values()) {
  console.log(inside);
};
/**
Oscar
Developer
 */
//-------------------------------------------------
for(let inside of cities.keys()) {
  console.log(inside);
};
/**
0
1
2
 */

for(let inside of orders.keys()) {
  console.log(inside);
};
/**
123
231
345
 */

for(let inside of data.keys()) {
  console.log(inside);
};
/**
name
profession
 */
//---------------------------------------------
