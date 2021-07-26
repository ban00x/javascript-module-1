let years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const peopleCanDrive = years.filter(canDrive);

function canDrive(year) {
    let age = 2021 - year;
    return age >= 17;
}
console.log(`These are the birth years of people who can drive: ${peopleCanDrive}`);