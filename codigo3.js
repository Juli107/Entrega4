function calcularIntereses(monto, cuotas) {
  let interes;
  if (cuotas == 3) {
    interes = monto * 0.1;
    return interes;
  } else if (cuotas == 6) {
    interes = monto * 0.3;
    return interes;
  } else if (cuotas == 12) {
    interes = monto * 0.5;
    return interes;
  }
}

function iva(monto) {
  return monto * 0.21;
}

let monto = parseInt(prompt("Ingesar el monto deseado"));
let cuotas = prompt("Ingresar la cantidad de cuotas: 3 / 6 / 12");
let precioTotal = monto + calcularIntereses(monto, cuotas) + iva(monto);

alert(precioTotal);
