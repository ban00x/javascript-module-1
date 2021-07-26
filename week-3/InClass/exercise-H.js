const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh", "Elya"];
const myName = "Elya";

function isInTheArray(allNames, nametoCheck) {
    if (allNames.find(name => name === nametoCheck)) {
        return "Found me!";
    }
    return "Haven't found me :(";
}
console.log(isInTheArray(names, myName));