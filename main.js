//Задание № 1
function rangeNumbers(a, b) {
    if (a === b) {
        console.log(a);
    } else if (a < b) {
        console.log(a);
        a += 1;
        rangeNumbers(a, b);
    } else {
        console.log(a);
        a -= 1;
        rangeNumbers(a, b);
    } 
};
rangeNumbers(1, 13);


//Задание № 2
let hoursBlock = document.getElementById('hours');
let minutesBlock = document.getElementById('minutes');
let secondsBlock = document.getElementById('seconds');
let dotsOne = document.getElementById('dotsOne');
let dotsSecond = document.getElementById('dotsSecond');

setInterval(function() {
    let time = new Date(),
        hours = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours(),
        minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes(),
        seconds = (time .getSeconds() < 10) ? '0' + time.getSeconds() : time.getSeconds();
    hoursBlock.innerHTML = hours;
    minutesBlock.innerHTML = minutes;
    secondsBlock.innerHTML = seconds;
    dotsOne.innerHTML = ':';
    dotsSecond.innerHTML = ':';
}, 250)

document.getElementById('btn').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        dotsSecond.classList.toggle('displayDots');
        secondsBlock.classList.toggle('displaySeconds');
    } else {
        dotsSecond.innerHTML = ':';
        secondsBlock.innerHTML = seconds;
    }
});