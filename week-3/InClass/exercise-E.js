let years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
let ages = [];

function countAge(years) {
    years.forEach((year) => {
        let age = 2021 - year;
        ages.push(age)

    })
    console.log(ages);
}
countAge(years);