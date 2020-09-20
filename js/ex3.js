/* Tutorial 4
 Example 1 JavaScript code
*/
console.log("Liu's Output from Tutorial 4 Example 1");

var i = prompt("Enter integer");
if (Number.isInteger(i) == false) {
    break;
} else {
    var i = prompt("Enter an integer please");
}

var ia = prompt("Enter second integer")
if (Number.isInteger(ia) == false) {
    break;
} else {
    var ia = prompt("Enter a second integer please");
}

console.log(i + ia);
console.log(i - ia);
console.log(i * ia);
console.log(i / ia);
console.log(i % ia);