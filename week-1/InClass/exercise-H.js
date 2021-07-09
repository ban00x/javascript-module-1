let userName = "Elya";
let userAge = 27;

//return a message with user name and user age 
function writeNameAndAge(name, age) {
    const nameAndAge = `${name} is ${age} y.o`;
    return nameAndAge;
}
console.log(writeNameAndAge(userName, userAge));
userName = "Max";
userAge = 52;
console.log(writeNameAndAge(userName, userAge));