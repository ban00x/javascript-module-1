let userAge = 27;
let userName = "Elya";
let date = new Date();
let currentYear = date.getFullYear();
// console.log(currentYear);

function countBirthYear(age) {
    const userBirthYear = currentYear - age;
    return userBirthYear;
}

function writeNameAndBirthYear(name, age) {
    const birthYear = countBirthYear(age);
    const message = `${name} was born in ${birthYear}.`
    return message;
}
console.log(writeNameAndBirthYear(userName, userAge));