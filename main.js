const semicircles = document.querySelectorAll('.semicircle');
const timer = document.querySelector('.timer');


// const dd = 0;
const hr = 0;
const min = 0;
const sec = 20;

// const days = dd * 86400000;
const hours = hr * 3600000;
const minutes = min * 60000;
const seconds = sec * 1000;
const setTime = hours + minutes + seconds;
// const setTime = days + hours + minutes + seconds;
// const startTime = new Date('December 5, 2022 19:00:00');
// const futureTime = new Date('January 16, 2023 05:35:00');
const startTime = Date.now();
const futureTime = startTime + setTime;


const timerLoop = setInterval(countDownTimer);
countDownTimer();

function countDownTimer() {
const currentTime = Date.now();
const remainingTime = futureTime - currentTime;
const angle = (remainingTime / setTime) * 360;

if(angle > 180) {
    semicircles[2].style.display = 'none';
    // semicircles[0].style.background = "black";
    semicircles[0].style.transform = "rotate(180deg)";
    semicircles[1].style.transform = `rotate(${angle}deg)`;

} else {
    semicircles[2].style.display = 'block';
    semicircles[0].style.transform = `rotate(${angle}deg)`;
    semicircles[1].style.transform = `rotate(${angle}deg)`;

}

// timer
const dds = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
let daysName = "days";
if (dds == 1) {
    daysName = "day";
} else {
    daysName = "days";
}

const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
const mins = Math.floor((remainingTime / (1000 * 60 )) % 60);
const secs = Math.floor((remainingTime / (1000)) % 60);

timer.innerHTML = `
<div class="timer_text">
<div class="days">
<div>${dds + " " + daysName}</div>
</div>
<div class="time">
<div>${hrs}</div>
<div class="colon">:</div>
<div>${mins}</div>
<div class="colon">:</div>
<div>${secs}</div>
</div>
</div>
`






if(remainingTime < 0) {
    clearInterval(timerLoop);
    semicircles[0].style.display = 'none'
    semicircles[1].style.display = 'none'
    semicircles[2].style.display = 'none'
}

}

