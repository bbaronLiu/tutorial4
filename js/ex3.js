/* Tutorial 4
 Example 1 JavaScript code
*/
console.log("Liu's Output from Tutorial 4 Example 1");


function getInt() {
    let input;
    while (input = prompt("Input number: ")) {
        if (isNaN(input)) {
            alert("Invalid input.");
        } else {
            return parseInt(input);
        }
    }
}

var i = getInt()
var ia = getInt()

console.log(i + ia);
console.log(i - ia);
console.log(i * ia);
console.log(i / ia);
console.log(i % ia);