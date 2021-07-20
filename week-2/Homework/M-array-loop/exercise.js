/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

function checkIfItemStartsWithT(array) {
    for (let i = 0; i < array.length; i++) {
        let itemFirstLetter = array[i].substring(0, 1);
        if (itemFirstLetter === "T") {
            console.log(array[i]);
        }
    }
}
checkIfItemStartsWithT(daysOfWeek);