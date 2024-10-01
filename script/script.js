///// UYGA VAZIFA /////
// 1-misol
// function quvvat(a, n) {
//     return Math.pow(a, n);
// }
// console.log(quvvat(3, 5));


// 2-misol
// function mean(a, b) {
//     let arithmetic = (a + b) / 2; 
//     let geometric = Math.sqrt(a * b); 
//     return [arithmetic, geometric];
// }
// let result = mean(12, 48);
// console.log(result[0]); 
// console.log(result[1]); 



// 3-misol
// function sign(n) {
//     if (n > 0) {
//         return 1;
//     } else if (n < 0) {
//         return -1;
//     } else {
//         return 0;
//     }
// }

// console.log(sign(10));  
// console.log(sign(-2)); 
// console.log(sign(0));   


// 4-misol (tushunmadim chatgpdan oldim..)
// function numberOfRoots(A, B, C) {
//     let D = B * B - 4 * A * C; // Diskriminant

//     if (D > 0) {
//         return 2; // 2 ta ildiz
//     } else if (D === 0) {
//         return 1; // 1 ta ildiz
//     } else {
//         return 0; // Ildizlar yo'q
//     }
// }

// // Test qilish
// console.log(numberOfRoots(1, -6, 9));  // 1
// console.log(numberOfRoots(1, -7, 10)); // 0
// console.log(numberOfRoots(1, -5, 6));  // 2


// 5-misol
// function areaCircle(R) {
//     const pi = Math.PI; 
//     return pi * R * R;  
// }

// console.log(areaCircle(7)); 


// 6-misol
// function sumRange(A, B) {
//     if (A > B) {
//         return 0; 
//     }
    
//     let sum = 0;
//     for (let i = A; i <= B; i++) {
//         sum += i; 
//     }
    
//     return sum;
// }

// console.log(sumRange(8, 10));  
// console.log(sumRange(7, 7));  
// console.log(sumRange(10, 8));  


// 7-misol
// function calc(A, B, S) {
//     switch(S) {
//         case '+':
//             return A + B; 
//         case '-':
//             return A - B;
//         case '*':
//             return A * B; 
//         case '/':
//             return B !== 0 ? A / B : 0; 
//         default:
//             return 0; 
//     }
// }
// console.log(calc(10, 15, '*'));  
// console.log(calc(7, 8, '+'));    
// console.log(calc(10, 5, '/'));   
// console.log(calc(9, 3, '-'));    
// console.log(calc(5, 0, '/'));    
// console.log(calc(5, 3, '^'));   


//  8-misol
// function isEven(K) {
//     return K % 2 === 0; 
// }

// console.log(isEven(10));  
// console.log(isEven(5));  
// console.log(isEven(0));   
// console.log(isEven(-2));  
// console.log(isEven(-1)); 



// 9-misol (tushunmadim chatgpdan oldim)
// function sortABC(a, b, c) {
//     let numbers = [a, b, c];
//     numbers.sort(function(x, y) {
//         return x - y;
//     });

//     return numbers;
// }

// console.log(sortABC(10, 5, 8));  
// console.log(sortABC(1, 2, 3));  
// console.log(sortABC(3, 3, 1));  
// console.log(sortABC(-2, 7, 4));  


// 10-misol (tsuhunmadim chatgpdan oldim..)
// function isPowerN(K, N) {
//     if (K <= 0 || N <= 1) {
//         return false; // K 0 dan katta bo'lishi va N 1 dan katta bo'lishi kerak
//     }

//     while (K > 1) {
//         if (K % N !== 0) {
//             return false; // Agar K N ga bo'linmasa, false qaytaradi
//         }
//         K /= N; // K ni N ga bo'lamiz
//     }

//     return K === 1; // K 1 ga teng bo'lsa, true qaytaradi
// }

// // Test qilish
// console.log(isPowerN(8, 2));  // true (2^3 = 8)
// console.log(isPowerN(27, 3)); // true (3^3 = 27)
// console.log(isPowerN(10, 2)); // false (2^x = 10 emas)
// console.log(isPowerN(1, 5));  // true (5^0 = 1)
// console.log(isPowerN(16, 4)); // true (4^2 = 16)
// console.log(isPowerN(81, 3)); // false (3^4 = 81 emas)


// 11-misol
// function isPrime(N) {
//     if (N <= 1) {
//         return false; 
//     }

//     for (let i = 2; i <= Math.sqrt(N); i++) {
//         if (N % i === 0) {
//             return false; 
//         }
//     }

//     return true; 
// }

// console.log(isPrime(7)); 
// console.log(isPrime(1));  
// console.log(isPrime(2)); 
// console.log(isPrime(10)); 
// console.log(isPrime(13));
// console.log(isPrime(15)); 


// 12-misol
// function isPrime(N) {
//     if (N <= 1) {
//         return false; 
//     }
//     for (let i = 2; i <= Math.sqrt(N); i++) {
//         if (N % i === 0) {
//             return false; 
//         }
//     }
//     return true; 
// }

// function numberOfPrime(N) {
//     let natija = 0;
//     for (let i = 2; i <= N; i++) {
//         if (isPrime(i)) {
//             natija++; 
//         }
//     }
//     return natija; 
// }

// console.log(numberOfPrime(10)); 
// console.log(numberOfPrime(20));  
// console.log(numberOfPrime(30));  
// console.log(numberOfPrime(1));   
