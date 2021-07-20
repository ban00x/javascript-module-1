let array = [1, 2, "aAmrs", "nice"]
let array2 = [1, 2, "aAmyrs", "nice"]

function secondMatchesAmy(array) {
    if (array[2].includes("Amy")) {
        return "Second index matched!";
    }
    return "Second index not matched";
}
console.log(secondMatchesAmy(array));
console.log(secondMatchesAmy(array2));