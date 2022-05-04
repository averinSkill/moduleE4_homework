// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

// const person = {
//     city:"Moscow",
// }

// const obj = Object.create(person);

// obj.ownCity = "piter";


function isProp(str, obj) {
    return obj.hasOwnProperty(str)    
}

// console.log(isProp('ownCity', obj))