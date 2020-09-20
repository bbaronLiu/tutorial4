/* Tutorial 4
 Example 2 JavaScript code
*/
console.log("Liu's Output from Tutorial 4 Example 2");

x = 0;
while (x == 0) {
    if (['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].includes(day)) {
        break;
    } else {
        var day = prompt("enter 3 letter abbreviation day of the week e.g. sun/mon");
    }
}

function followingDay(day) {
    switch (day) {
        case "sun":
            return "mon";

        case "mon":
            return "tue";

        case "tue":
            return "wed";

        case "wed":
            return "thu";

        case "thu":
            return "fri";

        case "fri":
            return "sat";

        case "sat":
            return "sun";
            
    }
}

console.log ("You entered : " + day);
console.log ("The following day is: " + followingDay(day));