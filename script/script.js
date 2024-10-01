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


// 13-misol (tushunmadim ishlolmadim..)
// function digitCount(K) {
//     // K sonining raqamlar sonini hisoblash
//     return String(K).length; // K ni stringga aylantirib, uzunligini qaytarish
// }

// function digitNth(K, N) {
//     // K soni 0 dan katta ekanini tekshirish
//     if (K <= 0) {
//         throw new Error("K must be greater than 0"); // K 0 dan katta bo'lishi kerak
//     }

//     // K ning raqamlar sonini tekshirish
//     if (N > digitCount(K)) {
//         return -1; // Agar N K ning raqamlar sonidan katta bo'lsa, -1 qaytarish
//     }
    
//     // K sonini stringga aylantirib, N-1 indeksidagi raqamni qaytarish
//     return parseInt(String(K)[N - 1]); // N-1 indeksi, raqamni butun son sifatida qaytarish
// }

// // Test qilish
// console.log(digitNth(105782, 5)); // 8
// console.log(digitNth(1057, 5));   // -1
// console.log(digitNth(12345, 3));  // 3
// console.log(digitNth(987654321, 2)); // 8
// console.log(digitNth(0, 1)); // xato - K 0 dan katta bo'lishi kerak



// 14-misol
// function inverseNumber(N) {
//     let result = 0;
//     while (N > 0) {
//         let digit = N % 10; 
//         result = result * 10 + digit; 
//         N = Math.floor(N / 10); 
//     }
//     return result;
// }
// console.log(inverseNumber(56814)); // 41865
// console.log(inverseNumber(12345)); // 54321
// console.log(inverseNumber(1000));  // 1
// console.log(inverseNumber(987));   // 789
// console.log(inverseNumber(0));     // 0


// 15-misol (tushunmadim ishlolmadim..)
// function inverseNumber(N) {
//     let result = 0; // Teskari raqamlar uchun natija o'zgaruvchisi
//     while (N > 0) {
//         let digit = N % 10; // N ning oxirgi raqamini olish
//         result = result * 10 + digit; // Natijaga raqamni qo'shish
//         N = Math.floor(N / 10); // N ni bir raqamga qisqartirish
//     }
//     return result; // Teskari raqamlar sifatida natijani qaytarish
// }

// function isPalindrom(N) {
//     if (N <= 0) {
//         return false; // N 0 dan kichik yoki teng bo'lsa, false qaytaramiz
//     }

//     const reversed = inverseNumber(N); // N ning teskari raqamini olish
//     return N === reversed; // Agar N va teskari raqam bir xil bo'lsa, true qaytarish
// }

// // Test qilish
// console.log(isPalindrom(1678761)); // true
// console.log(isPalindrom(12321));   // true
// console.log(isPalindrom(12345));   // false
// console.log(isPalindrom(78987));   // true
// console.log(isPalindrom(0));       // false


//  16-misol
// function factorial(N) {
//     if (N < 0) {
//         return 1;
//     }

//     let result = 1; 
//     for (let i = 1; i <= N; i++) {
//         result *= i; 
//     }
//     return result; 
// }
// console.log(factorial(7));   
// console.log(factorial(0));   
// console.log(factorial(-1)); 
// console.log(factorial(15));  


// 17-misol
// function getSum3(N) {
//     let sum = 0; 
//     for (let i = 1; i <= N; i++) {
//         if (i % 3 === 0) { 
//             sum += i; 
//         }
//     }
//     return sum; 
// }

// console.log(getSum3(15)); 
// console.log(getSum3(10)); 
// console.log(getSum3(3)); 
// console.log(getSum3(5)); 
// console.log(getSum3(0));  


// 18-misol
// function sumOddEven(N) {
//     let evenSum = 0; 
//     let oddSum = 0; 

//     for (let i = 1; i <= N; i++) {
//         if (i % 2 === 0) {
//             evenSum += i; 
//         } else {
//             oddSum += i;
//         }
//     }

//     return `${evenSum}, ${oddSum}`; 
// }

// console.log(sumOddEven(10)); 
// console.log(sumOddEven(5));  
// console.log(sumOddEven(0)); 
// console.log(sumOddEven(1));  
// console.log(sumOddEven(15)); 


// 19-misol
// function invertTime(H, M, S) {
//     const seconds = (H * 3600) + (M * 60) + S;
//     return seconds; 
// }
// console.log(invertTime(0, 6, 40)); 
// console.log(invertTime(1, 0, 0));  
// console.log(invertTime(0, 0, 30)); 
// console.log(invertTime(1, 1, 1));  
// console.log(invertTime(2, 30, 15)); 


// 20-misol (tushunmadim ishlolmadim chatgpdan oldim..)
// function decTime(H, M, S) {
//     // Agar S 0 ga teng bo'lsa, M dan 1 ga kamaytirishimiz kerak
//     if (S === 0) {
//         S = 59; // Sekundni 59 ga o'rnatamiz
//         M--; // Minutdan 1 ga kamaytirish
//         if (M < 0) { // Agar M 0 dan kichik bo'lsa
//             M = 59; // M ni 59 ga o'rnatamiz
//             H--; // H dan 1 ga kamaytirish
//             if (H < 0) { // Agar H 0 dan kichik bo'lsa
//                 H = 23; // H ni 23 ga o'rnatamiz
//             }
//         }
//     } else {
//         S--; // Sekundni 1 ga kamaytirish
//     }

//     // Vaqtni formatlash
//     const formattedTime = String(H).padStart(2, '0') + ':' + 
//                           String(M).padStart(2, '0') + ':' + 
//                           String(S).padStart(2, '0');

//     return formattedTime; // Formatlangan vaqtni qaytarish
// }

// // Test qilish
// console.log(decTime(0, 6, 40));  // 00:06:39
// console.log(decTime(1, 0, 0));   // 00:59:59
// console.log(decTime(0, 0, 0));   // 23:59:59
// console.log(decTime(0, 0, 1));   // 00:00:00
// console.log(decTime(2, 30, 15));  // 02:30:14


//  21-misol
// function isLeapYear(Y) {
//     if ((Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0)) {
//         return true; 
//     } else {
//         return false; 
//     }
// }
// console.log(isLeapYear(2020)); 
// console.log(isLeapYear(2000)); 
// console.log(isLeapYear(1900)); 
// console.log(isLeapYear(2001)); 
// console.log(isLeapYear(2024)); 
// console.log(isLeapYear(2100));


// 22-misol
// function isLeapYear(Y) {
//     return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }

// function monthDays(M, Y) {
//     if (M === 1 || M === 3 || M === 5 || M === 7 || M === 8 || M === 10 || M === 12) {
//         return 31;
//     } else if (M === 4 || M === 6 || M === 9 || M === 11) {
//         return 30; 
//     } else if (M === 2) {
//         return isLeapYear(Y) ? 29 : 28; 
//     } else {
//         return 0;
//     }
// }

// console.log(monthDays(2, 2020)); 
// console.log(monthDays(2, 2021)); 
// console.log(monthDays(4, 2023)); 
// console.log(monthDays(5, 2022));
// console.log(monthDays(12, 2021));
// console.log(monthDays(9, 2023)); 


// 23-misol (tushunmadim ishlolmadim chatgpdan oldim..)
// function isLeapYear(Y) {
//     return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }

// function monthDays(M, Y) {
//     if (M === 1 || M === 3 || M === 5 || M === 7 || M === 8 || M === 10 || M === 12) {
//         return 31; // 31 kunli oylari
//     } else if (M === 4 || M === 6 || M === 9 || M === 11) {
//         return 30; // 30 kunli oylari
//     } else if (M === 2) {
//         return isLeapYear(Y) ? 29 : 28; // Fevral: kabisa yili bo'lsa 29, aks holda 28
//     } else {
//         return 0; // Noto'g'ri oy kiritilgan
//     }
// }

// function prevDate(D, M, Y) {
//     // D ni 1 ga kamaytirish
//     D--;

//     // Agar D 0 ga teng bo'lsa, M ni 1 ga kamaytirishimiz kerak
//     if (D === 0) {
//         M--; // M ni 1 ga kamaytiramiz
//         if (M === 0) { // Agar M 0 ga teng bo'lsa
//             M = 12; // M ni 12 ga o'rnatamiz
//             Y--; // Y ni 1 ga kamaytiramiz
//         }
//         // Yangi M uchun D ni oxirgi kun bilan o'rnatamiz
//         D = monthDays(M, Y);
//     }

//     // Natijani formatlash
//     const formattedDate = String(D).padStart(2, '0') + '.' + 
//                           String(M).padStart(2, '0') + '.' + 
//                           Y;

//     return formattedDate;
// }

// // Test qilish
// console.log(prevDate(10, 3, 2022)); 
// console.log(prevDate(1, 1, 2023));  
// console.log(prevDate(1, 3, 2024)); 
// console.log(prevDate(1, 3, 2023));  
// console.log(prevDate(15, 5, 2022)); 


// 24-misol (tushunmadim ishlolmadim chatgpdan oldim..)
// function isLeapYear(Y) {
//     return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }

// function monthDays(M, Y) {
//     if (M === 1 || M === 3 || M === 5 || M === 7 || M === 8 || M === 10 || M === 12) {
//         return 31; // 31 kunli oylari
//     } else if (M === 4 || M === 6 || M === 9 || M === 11) {
//         return 30; // 30 kunli oylari
//     } else if (M === 2) {
//         return isLeapYear(Y) ? 29 : 28; // Fevral: kabisa yili bo'lsa 29, aks holda 28
//     } else {
//         return 0; // Noto'g'ri oy kiritilgan
//     }
// }

// function nextDate(D, M, Y) {
//     // D ni 1 ga oshirish
//     D++;

//     // Agar D oyning oxirgi kuniga teng bo'lsa, M ni 1 ga oshirishimiz kerak
//     if (D > monthDays(M, Y)) {
//         D = 1; // D ni 1 ga o'rnatamiz
//         M++; // M ni 1 ga oshiramiz

//         // Agar M 13 ga teng bo'lsa, Y ni 1 ga oshirish va M ni 1 ga o'rnatamiz
//         if (M > 12) {
//             M = 1; // M ni 1 ga o'rnatamiz
//             Y++; // Y ni 1 ga oshiramiz
//         }
//     }

//     // Natijani formatlash
//     const formattedDate = String(D).padStart(2, '0') + '.' + 
//                           String(M).padStart(2, '0') + '.' + 
//                           Y;

//     return formattedDate; // Formatlangan sanani qaytarish
// }

// // Test qilish
// console.log(nextDate(10, 3, 2022)); // 11.03.2022
// console.log(nextDate(31, 12, 2022)); // 01.01.2023
// console.log(nextDate(29, 2, 2024)); // 01.03.2024 (kabisa yili)
// console.log(nextDate(28, 2, 2023)); // 01.03.2023 (kabisa yili emas)
// console.log(nextDate(15, 5, 2022)); // 16.05.2022


//  25-misol (tushunmadim ishlolmadim chatgpdan oldim..)
// function getDividersNumberAndSum(N) {
//     let count = 0; // Bo'luvchilar soni
//     let sum = 0;   // Bo'luvchilar yig'indisi

//     // 1 dan N gacha har bir sonni tekshiramiz
//     for (let i = 1; i <= N; i++) {
//         if (N % i === 0) { // Agar i N ga bo'linsa
//             count++; // Bo'luvchilar sonini oshiramiz
//             sum += i; // Bo'luvchilar yig'indisini qo'shamiz
//         }
//     }

//     return `${count}, ${sum}`; // Natijani formatlab qaytaramiz
// }

// // Test qilish
// console.log(getDividersNumberAndSum(12)); // 6, 28
// console.log(getDividersNumberAndSum(15)); // 4, 24
// console.log(getDividersNumberAndSum(28)); // 6, 56
// console.log(getDividersNumberAndSum(1));  // 1, 1
// console.log(getDividersNumberAndSum(100)); // 9, 217
