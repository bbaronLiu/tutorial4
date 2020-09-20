/* Tutorial 4
 Example 1 JavaScript code
*/
console.log("Liu's Output from Tutorial 4 Example 1");

function passwordCheck() {
    var x = 0;
    while (true) {
        var input = prompt("Enter password: ")
        if (input == "secret") {
            return ("You entered the correct password after " + (x+1) + "attempt(s)")
        }
        if (x > 2) {
            return ("Your account is locked! You failed to enter the correct password " + x + "times")
        } else {
            x = x + 1;
        }
    }
}

console.log(passwordCheck())