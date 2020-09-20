/* Tutorial 4
 Example 1 JavaScript code
*/
console.log("Liu's Output from Tutorial 4 Example 1");
x = 0
y = 0
var i = prompt("Enter integer");
while (x == 0) {
    if (Number.isInteger(i) == true) {
        break;
    } else {
        var i = prompt("Enter an integer please");
    }
}

while (y == 0) {
    var ia = prompt("Enter second integer")
    if (Number.isInteger(ia) == true) {
        break;
    } else {
        var ia = prompt("Enter a second integer please");
    }
}

console.log(i + ia);
console.log(i - ia);
console.log(i * ia);
console.log(i / ia);
console.log(i % ia);