/* Tutorial 4
 Example 1 JavaScript code
*/
console.log("Liu's Output from Tutorial 4 Example 1");

var name = prompt("Please enter your name", "Enter Name");

var units = prompt("Please enter units completed", "Enter Units");
while (units <0 ) {
    var units = prompt("Units must be >= 0, please enter again")
}

function gradeStanding(units) {
    if (units <= 30) {
        return "Freshman";
    } else if (units <= 60) {
        return "Sophomore";
    } else if (units <= 90) {
        return "Junior";
    } else {
        return "Senior";
    }
}

var standing = gradeStanding(units)

console.log("Hello " + name);
console.log("Your grade standing is " + standing);