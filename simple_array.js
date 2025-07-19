// let arr = [4, 3, 10, 0, 20, 30];
// function searchElement(arr, num) {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] == num) {
//             return i;
//         };
//     }
//     return -1;
// };

// let res = searchElement(arr,10);
// console.log(res)

// function countNegativeNum(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             count = count + 1;
//         };
//     };
//     return count;
// };


// let arr = [1, 4, 5, 1, 7, 8, 3, 43, 546, 64];
// let res = countNegativeNum(arr);
// console.log(res)

// function findLagestNum(arr) {
//     let largest = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (largest <  arr[i]) {
//             largest = arr[i];

//         }

//     }
//     return largest;
// };

// let arr = [13, 4, 5, 1, 7, 8, 3, 43, 5, 64];
// console.log(findLagestNum(arr))


// function findSmallest(arr) {
//     let smallest = Infinity;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < smallest) {
//             smallest = arr[i];
//         };
//     };
//     return smallest;
// };

// let arr = [13, 4, 5, 1, -7, -8, 3, -43, 5, 64];
// console.log(findSmallest(arr))


// function findSecondLargest(arr) {
//     let flargest = -Infinity;
//     let slargest = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > flargest) {
//             slargest = flargest;
//             flargest = arr[i];
//         }
//     }
//     return slargest;
// }

// let arr = [13, 4, 5, 1, 7, 8, 3, 43, 5, 64];
// console.log(findSecondLargest(arr));
