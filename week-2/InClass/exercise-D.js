let mood = prompt("What is your mood now?");

function moodChecker(mood) {
    if (mood === "happy") {
        console.log("Good job, you're doing great!");
    } else if (mood === "bad") {
        console.log("Every cloud has a silver lining");
    } else if (typeof parseInt(mood) === "number" && typeof mood !== "string") {
        console.log("Beep beep boop");
    } else {
        console.log("I'm sorry, I'm still learning about feelings!");
    }
}
moodChecker(mood);