const product1 = 'Pizza',
      price1 = 30,
      product2 = 'Paste'
      price2 = 15;

let html;
/*
html = '<ul>' +
          '<li>Order: ' + product1 + '</li>' +
          '<li>Precio: ' + price1 + '</li>' +
          '<li>Order: ' + product2 + '</li>' +
          '<li>Precio: ' + price2 + '</li>' +
        '</ul>';
*/

html = `<ul>
          <li>Order: ${product1}</li>
          <li>Precio: ${price1} </li>
          <li>Order: ${product2}</li>
          <li>Precio: ${price2} </li>
        </ul>`;

document.getElementById('app').innerHTML = html;
