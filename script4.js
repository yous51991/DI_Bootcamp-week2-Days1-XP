let c;
let a = 34;
let b = 21;

console.log(a+b)
// Prediction: Il affichera 55, car 21 et 34 sont des nombres
// Actual: 55

a = 2;
console.log(a+b) //second expression
// Prediction: Il affichera 23, car 2 et 21 sont des nombres
// Actual: 23

// c value is : undefined
console.log(3 + 4 + '5');
// Prediction: cette syntaxe est incorrecte mais elle affichera la concaténation de la somme de 7(3+4) et du caractère 5
// Actual: 75