var a = 'a';
let b = 'b';
const c = 'c';

function function_scope() {
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('FUNCTION: ' + a,b,c);
}

function_scope();

if(true) {
    var a = 'AA';
    let b = 'BB';
    const c = 'CC';
    console.log('BLOCK: ' + a,b,c);
}

console.log('GLOBAL: ' + a,b,c)
