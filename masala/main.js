// function tub(n, m) {
//   let result = 0;
//   for (let i = n; i <= m; i++) {
//     if (n % i == 0) {
//         result++;
//     }
//     if(result<=2){
//         console.log(result)
//     }
//   }

// }
// tub(2,10)

// 4-misol
// let arr = [6, -32, 87, -12, -76, 32, 866, -111];
// function count(arr) {
//   let musbat = [];
//   let manfiy = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       musbat.push(arr[i]);
//     } else if (arr[i] < 0) {
//       manfiy.push(arr[i]);
//     }
//   }
//   return { musbat, manfiy };
// }

// let result = count(arr);
// console.log("Musbat sonlar soni:", result.musbat);
// console.log("Manfiy sonlar soni:", result.manfiy);

// 5-misol
// let son = +prompt("son kiriting");
// let arr = [6, -32, 87, -12, -76, 32, 866, -111];
// function res(arr, son) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.includes(son)) {
//       console.log("bu son arrayda bor");
//       break;
//     } else {
//       console.log("bu son arrayda yoq");
//     }
//   }
// }
// res(arr, son);
