const messyArray = [
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
];

function clearArray(array) {
    let filteredArray = array.filter((string) => typeof string === "string");
    let upperCasedArray = filteredArray.map(element => `${element.toUpperCase()}!`);
    return upperCasedArray;
};
console.log(clearArray(messyArray));