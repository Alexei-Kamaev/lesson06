'use strict';
{
function isPrime(a) {
    if (a===2 || a===1) return(true);
    for (let n=2; n<a; n += 1) {
        if (a % n == 0) {
            return(false);
        } else return(true);
    }
}

const inNumber = +prompt('Введите число:');
Number.isNaN(inNumber) ? console.log('Неверные данные. Повторите.') : console.log(isPrime(inNumber));


}