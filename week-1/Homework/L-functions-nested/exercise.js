var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
//Exercise 1
const students = 20;
const mentors = 15;

function countPercentage(numberOfStudents, numberOfMentors) {
    const sum = numberOfStudents + numberOfMentors;
    const percentageOfStudents = Math.round(numberOfStudents / sum * 100);
    const percentageOfMentors = Math.round(numberOfMentors / sum * 100);
    const message = `Percentage students:${percentageOfStudents}; Percentage mentors:${percentageOfMentors}`
    return message;
}
console.log(countPercentage(students, mentors));
//Exercise 2
function makeWordUppercase(word) {
    return word.toUpperCase();
}

function createGreeting(name) {
    // name = makeWordUppercase(name);
    const greeting = `Hello ${name}`;
    return makeWordUppercase(greeting);
}
console.log(createGreeting(mentor1));
console.log(createGreeting(mentor2));
console.log(createGreeting(mentor3));
console.log(createGreeting(mentor4));
console.log(createGreeting(mentor5));