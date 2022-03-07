// 1. mixed type array declaration

const mixedTypes = [1, 'faysal', [1, 2, 3], { name: 'faysal' }];
console.log(mixedTypes);

// 2. length and index element check array

const arrayLengthCheck = [1, 'faysal', [1, 2, 3], { name: 'faysal' }];
console.log(arrayLengthCheck.length);
console.log(arrayLengthCheck[0]);

// 3. push method in array

const colleagueNames = ['Mahadi', 'Ataur', 'Opu', 'Al-amin', 'Shuvo'];
colleagueNames.push('kripa');
console.log(colleagueNames);

// 3. pop method in array

const BrotherNames = ['lekhon', 'Mahadi', 'Ataur', 'Opu', 'Al-amin', 'Shuvo'];
BrotherNames.pop();
console.log(BrotherNames);

// 4. unshift method in array

const fruits = ['apple', 'jack-fruit', 'banana', 'lemon'];
fruits.unshift('pineapple');
console.log(fruits)
// output : [ 'pineapple', 'apple', 'jack-fruit', 'banana', 'lemon' ]

// 5. shift method in array

const fruitList = ['apple', 'jack-fruit', 'banana', 'lemon'];
fruitList.shift();
console.log(fruitList)
// output : [ 'jack-fruit', 'banana', 'lemon' ]

// 6. reverse method in array

const numberReverse = [1, 2, 3, 4, 5, 6];
numberReverse.reverse();
console.log(numberReverse)
// output : [ 6, 5, 4, 3, 2, 1 ]

// 7. sort method in array (according to ascending or descending)

const numberSort = [10, 2, 3, 43, 15, 6];
numberSort.sort();
console.log(numberSort)
// output : [ 6, 5, 4, 3, 2, 1 ]

// 7. splice method in array

const numberSplice = [10, 2, 3, 43, 15, 6];
numberSplice.splice(3, 1);
// numberSplice.splice(3, 1, 15);
console.log(numberSplice)
// output : [ 6, 5, 4, 3, 2, 1 ]

