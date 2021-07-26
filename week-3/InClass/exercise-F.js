let years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function countAge(years) {
    years.forEach((year) => {
        let age = 2021 - year;
        if (age >= 17) {
            console.log(`Born in ${year} can drive`);
        } else console.log(`Born in ${year} can drive in ${17-age} years`);
    })
}
console.log(countAge(years));