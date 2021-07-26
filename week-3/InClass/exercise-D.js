function magician(yourFunc) {
    console.log(
        "I am magician! Watch as I mutate an array of strings to your heart's content!"
    );
    const namesArray = [
        "James",
        "Elamin",
        "Ismael",
        "Sanyia",
        "Chris",
        "Antigoni",
    ];
    const magicOutput = yourFunc(namesArray);
    // console.log(magicOutput);
    return magicOutput.sort();
}


console.log(magician((array) => array.map((name) => name.toUpperCase()).sort()));