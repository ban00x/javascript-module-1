let group1 = ["Elya", "Kostya", "Alex", "Micael", "Ray"];
let group2 = ["Ann", "John", "Nick", "Nathan"];
let allStudents = group1.concat(group2).sort();
console.log(allStudents);

function isInTheGroup(name, array) {
    if (!array.includes(name)) {
        console.log(`${name} is not in the group`);
        return `${name} is not in the group`;
    } else {
        console.log(`${name} is in the group`);
        return `${name} is in the group`;
    }
}
console.log(isInTheGroup("Elya", group1));
console.log(isInTheGroup("Elya", group2));