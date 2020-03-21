let payment_method = `card`
switch(payment_method) {
    case `cash`:
          console.log(`Pay with ${payment_method}`);
          break;
    case `card`:
          console.log(`Pay with ${payment_method}`);
          break;
    case `check`:
          console.log(`Pay with ${payment_method}`);
          break;
    default:
          console.log(`The method of payment is not valid`);
};
//-----------------------------------------------------------
let month = new Date();

switch(month.getMonth()) {
      case 0:
          console.log(`January`);
          break;
      case 1:
          console.log(`February`);
          break;
      case 2:
          console.log(`March`);
          break;
      case 3:
          console.log(`April`);
          break;
      case 4:
          console.log(`May`);
          break;
      case 5:
          console.log(`June`);
          break;
      case 6:
          console.log(`July`);
          break;
      case 7:
          console.log(`August`);
          break;
      case 8:
          console.log(`September`);
          break;
      case 9:
          console.log(`October`);
          break;
      case 10:
          console.log(`November`);
          break;
      case 11:
          console.log(`December`);
          break;
      default:
          console.log(`Error`);
};