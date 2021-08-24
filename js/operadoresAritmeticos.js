var subtotal = (13+0)*5;
var frete = 0.5 * (13+1);
var total = subtotal + frete;

var subResultado = document.getElementById('subtotal');
subResultado.textContent = subtotal;

var freteResultado = document.getElementById('frete');
freteResultado.textContent = frete;

var totalResultado = document.getElementById('total');
totalResultado.textContent = total;