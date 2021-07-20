/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a for loop

*/

let n = 10;
let result = 0;

function sumTillNum(num) {
    result = num;
    for (num > 0; num--;) {
        result += num;
    }
    return result;
    //your code here
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));