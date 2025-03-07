// Esta es mi función que suma dos números
//const sum = (a,b) => {
  //  return a + b
//}

// Solo un registro en consola para nosotros
//console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
//module.exports = { sum };
let oneEuroIs = {
  "JPY": 156.5,
  "USD": 1.07,
  "GBP": 0.87,

};
function fromDollarToYen(dollars){
  let euroEquivalent = dollars/oneEuro["USD"];
  let yen= euroEquivalent * oneEuroIs["JPY"];
  return yen;
}
//Funcion para convertir euros en dolares
function fromEuroToDollar(euros){
  let dollars = euros*oneEuroIs["USD"];
  return dollars;
}
// Funcion para convertir de yenes a libras esterlinas
function fromYenToPound(yen){
  let euroEquivalent= yen/oneEuroIs["JPY"];
  let pounds= euroEquivalent* oneEuroIs["GBP"];
  return pounds;
}

console.log(fromDollarToYen(10));// convertir 10 dolares a yenes
console.log(fromEuroToDollar(10));//convertir 10 euros a dolares
console.log(fromYenToPound(1000));// convertir 1000 yenes a libras esterlinas