// Basic function to console log message

function greetings() {
    console.log("Hello world")
}
greetings();

// check 1
const user = ['faysal', 'khan', 'frontend Engineer'];

function getUserDetails([firstName, LastName, Profession]) {
    return `${firstName} ${LastName} is a ${Profession}`
}
getUserDetails(user);

// check 2
function AddNumber(number) {
    return number + 20;
}
const number = AddNumber(1);
console.log(number)

// check 3
function birthYear(age) {
    return 2022 - age;
}
const calAge = birthYear(1995);
console.log(calAge);


// check 4
const yearsToRetirement = (birthyear, firstName) => {
    const age = 2021 - birthyear;
    const retirement = 60 - age;
    return `${firstName} will be retired in ${retirement} years!`;
}

const retirement = yearsToRetirement(1986, 'Sumudu');
console.log(retirement);


// check 5
const yaersToRetirement = (birthYear, personName) => {
    const age = 2021 - birthYear;
    const retirement = 60 - age;
    return `${personName} will be retired in ${retirement} years`
}
const retirement1 = yaersToRetirement(1995, "faysal");
console.log(retirement);

// callback function test

function callMyName(name, callback) {
    var myAge = 20;
    callback(myAge);
    console.log('Is it interesting? Yes it is Mr.' + name);
}
function hello(age) {
    console.log('I am passed through argument and my age is: ' + age);
}
callMyName('Zonayed Ahmed', hello);

