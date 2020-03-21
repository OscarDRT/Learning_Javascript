let age = 18;

if(age >= 18) {
    console.log(`You can go in`);
}else {
    console.log(`You can't go in`);
};

if(age < 18) {
    console.log(`You can go in`);
}else {
    console.log(`You can't go in`);
};

if(age === 18) {
    console.log(`You can go in`);
}else {
    console.log(`You can't go in`);
};

let score;

if(score) {
    console.log(`Score is ${score}`)
}else {
    console.log(`no score`);
};

let cash = 500;
let total = 300;

if(total <= cash) {
    console.log(`You can pay`);
}else {
    console.log(`Insufficient funds`);
};
//------------------------------------------
//-----------------------------------------------
let hour = 12;

if(hour > 0 && hour <= 11) {
    console.log(`Good Morning`);
}else if(hour >= 12 && hour <= 18) {
    console.log(`Good Afternoon`);
}else if(hour >= 19 && hour <= 24) {
    console.log(`Good Night`);
}else {
    console.log(`Invalid Time`);
};
//-----------------------------------------------
let cash = 300,
    credit = 300,
    total = 500,
    available = cash + credit;


if(total < cash || total < credit) {
    console.log(`You can pay`);
}else if(total < available) {
    console.log(`Amount to pay`);
}else {
    console.log(`You can not pay`);
};
//-----------------------------------------------
//ternary
let log = false;
console.log(log === true ? `Yes` : `No`);

let log2 = true;
console.log(log2 === true ? `Yes` : `No`);
