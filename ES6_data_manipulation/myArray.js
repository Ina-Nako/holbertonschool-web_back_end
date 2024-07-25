//const phones = ["samsung","xiaomi","apple"];
// const myName = "javascript";

//phones.map((phone,index)=> {
//    return phone + "operating system is Android"
// });

//const result = phones.map((phone, index) => {
 //   return phone + "" + "operating system is android"
//});

//console.log("result--", result);

// --------------------------------------------------------------------
// const numbers = [1, 5, 7, 12, 4, 76, 98, 4, 12]
// const result = numbers.find((number, index) => {
//     if (number > 10) {
//         return number;
//     }
// });
// console.log("result--", result);

// --------------------------------------------------------------------
// const numbers = [1, 5, 7, 12, 4, 76, 98, 4, 12]
// const result = numbers.filter((number, index) => {
//     if (number > 10) {
//         return number;
//     }
// });
// console.log("result--", result);


// --------------------------------------------------------------------
// const biggestNumbers = [];
// const numbers = [1, 5, 7, 12, 4, 76, 98, 4, 12]
// numbers.filter((number, index) => {
//     if (number > 10) {
//         biggestNumbers.push(number)
//     }
// });
// console.log("result--", biggestNumbers);



// --------------------------------------------------------------------
const fruits = new Map([
    ["apples", 500],
    ["bannanas", 300],
    ["oragnes", 200]
]);

console.log(fruits.get("bannanas"));