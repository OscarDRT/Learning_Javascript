// Function declaration
/*
function say_hi(name){
  console.log(`Hello ${name}`);
}

say_hi(prompt('what is your name?'));
*/
//-------------------------------------------------------------------------

function say_my_name(name = 'Visitor') {
    return `Hello ${name}`;
};
console.log(say_my_name()); // Hello Visitor
console.log(say_my_name('Oscar')); // Hello Oscar

//-------------------------------------------------------------------------

function sum(a,b) {
    console.log(a + b);
};
sum(3,2); // 5
sum('Hello ','World'); //Hello World
// sum(2) error

//-------------------------------------------------------------------------

function sum2(a,b) {
    return a + b;
};
console.log(sum2(3,3)); // 6

//-------------------------------------------------------------------------
// Function expression
const sum3 = function(a=0,b=0){
    return a + b;
};
console.log(sum3(2,2)); //4
console.log(sum3(2)); // 2

//-------------------------------------------------------------------------
//IIFE
(function() {
    console.log('Hello');
})();

(function(name) {
    console.log(`Hello ${name}`);
})('Oscar');

(function(a=0,b=0){
console.log(a + b)
})(2,5);

// methods
const music = {
    reproduce: function(id){
                console.log(`Play Music ID ${id}`);
    },
    pause: function(id){
                console.log(`Pause Music ID ${id}`);
    }
};
music.reproduce(2);
music.pause(2);