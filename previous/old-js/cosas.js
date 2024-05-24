/*
var upper = 'A'.charCodeAt();
var lower = 'a'.charCodeAt();
var arrUpp = [];
var arrLow = [];

while (upper <= 90) {
    let chr = String.fromCharCode(upper);
    arrUpp.push(chr);
    upper++;
}
console.log(arrUpp.join(''));

while (lower <= 122) {
    let chr = String.fromCharCode(lower);
    arrLow.push(chr);
    lower++;
}
console.log(arrLow.join(''));
*/
const numbers = [1, 2, 3, 4, 5];
const [a, ...middle] = numbers.slice(0, -1); // Se capturan todos los elementos excepto el último
const b = numbers[numbers.length - 1]; // Se obtiene el último elemento

console.log(a); // 1
console.log(middle); // [2, 3, 4]
console.log(b); // 5

console.log(numbers.slice(0,4));



