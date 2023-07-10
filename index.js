
// array of seconds , minutes and hours ---> 
let [seconds, minutes, hours] = [0, 0, 0];
let displaytime = document.getElementById("displaytime");
let timer = null;

// function for stopwatch  -->
function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;

        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    // if seconds minutes hours is less then ten and we add zero to display like this == 02:06:03--->
    let s = seconds < 10 ? "0" + seconds : seconds
    let m = minutes < 10 ? "0" + minutes : minutes
    let h = hours < 10 ? "0" + hours : hours

    // displaying the seconds minutes and hours in index.html user interface--->
    displaytime.innerHTML = s + ":" + m + ":" + h;
}

// making stopwatch run every second -->
function startWatch() {
    // if timer is running already then execute the following logic and clear the interval
    if (timer !== null) {
        clearInterval(timer);

    }
    timer = setInterval(stopwatch, 1000);
}

//  To Stop The Watch --->
function watchStop() {

    clearInterval(timer);

}

// To Reset The Watch --->

function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displaytime.innerHTML = "00:00:00";
}