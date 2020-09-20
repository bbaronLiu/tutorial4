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

function getHour() {
    x = 0;
    while (x == 0) {
        var hour = getInt();
        if (hour >= 0 && hour <=24) {
            return hour;
        }
    }
}

function getMinute() {
    x = 0;
    while (x == 0) {
        var min = getInt();
        if (min >= 0 && min <=59) {
            return min;
        }
    }
}

function getSecond() {
    x = 0;
    while (x == 0) {
        var sec = getInt();
        if (sec >= 0 && sec <=59) {
            return sec;
        }
    }
}

function oneSecondLater() {
    var hour = getHour();
    var minute = getMinute();
    var second = getSecond();
    console.log(hour + "h" + minute + "m" + second + "s");
    if (second == 59) {
        if (minute == 59) {
            if (hour == 23) {
                hour = 0;
                minute = 0;
                second = 0;
                return (hour + "h" + minute + "m" + second + "s");
            } else {
                hour = hour +1;
                minute = 0;
                second = 0;
                return (hour + "h" + minute + "m" + second + "s");
            }
        } else {
            hour = hour;
            minute = minute +1;
            second = 0;
            return (hour + "h" + minute + "m" + second + "s");
        }
    } else {
        second = second +1;
        return (hour + "h" + minute + "m" + second + "s");
    } 
}

console.log("Time input: " + oneSecondLater())
