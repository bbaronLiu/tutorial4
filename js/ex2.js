/* Tutorial 4
 Example 2 JavaScript code
*/
console.log("Liu's Output from Tutorial 4 Example 2");

var day = prompt("enter 3 letter abbreviation day of the week e.g. sun/mon");

x = 0;
while (x = 0) {
    if (['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].includes(day)) {
        break;
    } else {
        var day = prompt("enter 3 letter abbreviation day of the week e.g. sun/mon");
    }
}

function followingDay(day) {
    if (['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].includes(day)) {
        switch (day) {
            case "sun":
                day = "mon";
                break;
            case "mon":
                day = "tue";
                break;
            case "tue":
                day = "wed";
                break;
            case "wed":
                day = "thu";
                break;
            case "thu":
                day = "fri";
                break;
            case "fri":
                day = "sat";
                break;
            case "sat":
                day = "sun";
                break;
        }
    
    }
}

console.log ("You entered : " + day);
console.log ("The following day is: " + followingDay(day));