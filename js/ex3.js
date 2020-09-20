/* Tutorial 4
 Example 1 JavaScript code
*/
console.log("Liu's Output from Tutorial 4 Example 1");
x = 0;
y = 0;
var i = prompt("Enter integer");
var ia = prompt("Enter second integer");
function check(){
    while (x == 0) {
        if (Number.isInteger(i) == "true") {
            return i;
        } else {
            var i = prompt("Enter an integer please");
        }
    }
}

function checkia() {
    while (y == 0) {
        if (Number.isInteger(ia)) {
            return ia;
        } else {
            var ia = prompt("Enter a second integer please");
        }
    }
}


console.log(check() + checkia());
console.log(check() - checkia());
console.log(check() * checkia());
console.log(check() / checkai());
console.log(check() % checkia());