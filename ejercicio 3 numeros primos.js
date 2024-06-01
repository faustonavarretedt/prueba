var contenedor =[1,2,3,4,5,6,7,8,9,10];
var prima = 2;
var numerosPrimos = [];

for (let i=0; prima < contenedor.length; prima++) {
  if (filtrarprimos(prima)) {
    numerosPrimos.push(prima);
  }  
}

console.log(numerosPrimos);

function filtrarprimos(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}
