// 1. mixed type array declaration

const mixedTypes = [1, 'faysal', [1, 2, 3], { name: 'faysal' }];
console.log(mixedTypes);

// 2. length and index element check array

const arrayLengthCheck = [1, 'faysal', [1, 2, 3], { name: 'faysal' }];
console.log(arrayLengthCheck.length);
console.log(arrayLengthCheck[0]);


// 3-7 serial number methods are mutators array method

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
numberSplice.splice(3, 2);
// numberSplice.splice(3, 1, 15);
console.log(numberSplice)
// output : [ 10, 2, 3, 6]



// 8. every method in array

const farm = [
    { name: 'apple', type: 'fruit' },
    { name: 'rat', type: 'animal' },
    { name: 'pineapple', type: 'fruit' },
    { name: 'lemon', type: 'fruit' },
    { name: 'cow', type: 'animal' },
    { name: 'sheep', type: 'animal' },
]

const checkEveryMethod = farm.every(element => element.type === 'fruit');
console.log(checkEveryMethod);
// output : false


// 9. map method in array

const randomNumbers = [4, 3, 7, 2, 9];

const doubleArrayNumbers = randomNumbers.map((randomNumber) => {
    return randomNumber * 2
});
console.log(doubleArrayNumbers);

// output : [ 8, 6, 14, 4, 18]


// 10. forEach method in array  

const farmCategory = [
    { name: 'apple', type: 'fruit' },
    { name: 'rat', type: 'animal' },
    { name: 'pineapple', type: 'fruit' },
    { name: 'lemon', type: 'fruit' },
]

farmCategory.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name}`);
})

// output : 1. apple  2. rat  3. pineapple  4. lemon


// 11. filter method in array  

const numbers = [4, 5, 3, 19, 18, 21]
const checkFilter = numbers.filter((number) => {
    return number % 2
})
console.log(checkFilter);
// output : [ 5, 3, 19, 21 ]

// 12. find method in array  (note: filter so long so return array but find short word so it only matching)

const farmStatistics = [
    { name: 'apple', type: 'fruit' },
    { name: 'rat', type: 'animal' },
    { name: 'pineapple', type: 'fruit' },
    { name: 'lemon', type: 'fruit' },
]
const checkFind = farmStatistics.find((element) => element.name === 'apple')
console.log(checkFind);
// output : { name: 'apple', type: 'fruit' }

// reduce method array

const rockets = [
    { country: 'Russia', launches: 32 },
    { country: 'US', launches: 23 },
    { country: 'China', launches: 16 },
]
const sum = rockets.reduce(function (total, elem) {
    return total + elem.launches;
}, 0);
console.log(sum);
// output: 71

