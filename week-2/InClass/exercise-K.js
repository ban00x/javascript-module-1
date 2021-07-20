const students = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];

function showStudentsNames(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element);
    }
}
console.log(showStudentsNames(students));