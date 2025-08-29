// function myFun(str) {
//   let len = str.length;
//   let countVowel = 0;
//   for (let i = 0; i < len; i++) {
//     if (
//       str.charAt(i) == "a" ||
//       str.charAt(i) == "e" ||
//       str.charAt(i) == "i" ||
//       str.charAt(i) == "o" ||
//       str.charAt(i) == "u"
//     ) {
//       countVowel++;
//     }
//   }
//   console.log(countVowel);
// }

// myFun("hellooo");

// const countVowel = (str) => {
//   let count = 0;
//   str = str.toLowerCase();
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// };

// countVowel("Abc"); // 1
// countVowel("kundan"); // 2
// countVowel("ravi"); // 2
// countVowel("puja"); // 2

//  for each loops...
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function myFun(val) {
//   console.log(val);
// });

// forEach loops using the arrow function...
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((val) => {
//   console.log(val);
// });

// square of the value of any array
// let arr = [1, 2, 3, 4, 5];

// arr.forEach((val) => {
//   console.log(val * val);
// });

// arr.forEach(function squareOfArr(val) {
//   console.log(val * val);
// });

// filter out the marks which is greater than the 90
// let marks = [90, 82, 98, 99, 72, 80, 94];
// let marksGreater = marks.filter((val) => {
//   return val > 90;
// });

// console.log(marksGreater);

// reduced function...
let num = prompt("Enter a number");
let arr = [];
for (let i = 1; i <= num; i++) {
  arr[i - 1] = i;
}

let newArrProd = arr.reduce((curr, prev) => {
  return curr * prev;
});
console.log("Prod =  " + newArrProd);

let newArrSum = arr.reduce((curr, prev) => {
  return curr + prev;
});
console.log("Sum = " + newArrSum);
