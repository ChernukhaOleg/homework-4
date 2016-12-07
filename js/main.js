/*
 1. Напишите функцию которая принимает 2 числа
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */
function numbersBetween(a, b) {
    var num = [];
        for (var i = a + 1; i < b; i++) {
            num.push(i);
    }
    return num;

};
console.log(numbersBetween(1,5));
console.log(numbersBetween(3,6));
console.log(numbersBetween(12,15));
/////
function numbersBetween1(a, b) {
    var num1 = [];
    while (a+1 < b) {
        num1.push(a+1);
        a++;
    }
    return num1;
}
console.log(numbersBetween1(1,5));
console.log(numbersBetween1(3,6));
console.log(numbersBetween1(12,15));
/*
 2. Перепешите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
 */
function fizzBuzz() {
    for (var i = 0; i < 100; i++){
        var str = ' ';
        if (i%3==0){
            str += 'Fizz';
        }if (i%5==0){
            str += 'Buzz';
        }else {
            str = i;
        }
console.log(str)
    }
}
fizzBuzz();
/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */
var x;
var arr =  ['Hello', {name: 'Oleg'}, true, 356, x];
function arreyType () {
    var arrType = [];
    for(var i = 0; i < arr.length; i++){
        arrType[i] = typeof arr[i];
        //arrType.push(typeof arr[i]) //можно через push

    };

    console.log(arrType)
};
arreyType();
/*
 @@SUPER@@. Вам дан массив array, содержащий внутри объекты.
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN, тогда добавляет данному объекту свойство unknownAge: true
 Далее создайте новый массив содержащий все объекты есть свойство unknownAge:true
 */
let array = Array.from({ length: 35 }).map((value, index) => index % 2 ? { age: index + 2 } : { age: NaN });
function  type() {
    var arType = [];
    for (var i = 0; i < array.length; i++) {
        if (isNaN(array[i].age)) {
            var tmpObj = array[i];
            tmpObj.unknownAge = true;
            array[i] = tmpObj;
            arType[i] =array[i];
            //arType.push
        }
    }
    return arType
   }
type()
console.log(array);
console.log(type(array));
////////////
// Написать функцию, которая возвращает 1 массив, содержащий внутри себя 2 массива.
// Первый массив четные числа в обратном порядке. Второй массив нечетные числа в обычном порядке
//
// let myArr = [1,2,3,4,5,6,7,8,9];
//
// function evenOdd(arr) {
//     var arrey = []
//     for (var i= 0; i < myArr.length;i+=2){
//
//
//
//     }
//     evenOdd()
// }
//
//
// console.log(myArr) //[ [8,6,4,2], [1,3,5,7,9] ]

//
// n = [1,2,3,4,5,6,7,8,9]
// function isEven(n) {
//     return n % 2 == 0;
//
// }
// isEven()
// console.log(isEven)
// function isOdd(n) {
//     return Math.abs(n % 2) == 1;
// }
// let myArr = [1,2,3,4,5,6,7,8,9];
//
// function evenOdd(arr) {
//     var arType = [];
//     for (var i = 0; i <= myArr.length; i++){
//         if(myArr[i]%2==0);
//
//     }
//     return arType
// }
// evenOdd()
// console.log() //[ [8,6,4,2], [1,3,5,7,9] ]
