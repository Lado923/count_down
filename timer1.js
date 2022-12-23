const semicircles = document.querySelectorAll('.semicircle');
const timer = document.querySelector('.timer');
const circleSize = document.querySelector('.circle_container')
const outermostSize = document.querySelector('.outermost_circle')



//circle resizing

if(document.documentElement.clientHeight > document.documentElement.clientWidth){
    circleSize.style.width = '70vw';
    circleSize.style.height = '70vw';
    outermostSize.style.width = '65vw';
    outermostSize.style.height = '65vw';
    
} else {
    circleSize.style.width = '70vh';
    circleSize.style.height = '70vh';
    outermostSize.style.width = '65vh';
    outermostSize.style.height = '65vh';
}



const setTime = Date.parse(new Date('December 5, 2022 19:00:00'));
const futureTime = Date.parse(new Date('January 16, 2023 05:35:00'));
const intervalTime = futureTime - setTime;


const timerLoop = setInterval(countDownTimer);
countDownTimer();

function countDownTimer() {
const currentTime = Date.now();
const remainingTime = futureTime - currentTime;
const angle = (remainingTime / intervalTime)*360;


if(angle > 180) {
    semicircles[2].style.display = 'none';
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

    timer.innerHTML = `
<div class="timer_text">
<div class="days">
<div>0 days</div>
</div>
<div class="time">
<div>00</div>
<div class="colon">:</div>
<div>00</div>
<div class="colon">:</div>
<div>00</div>
</div>
</div>
`
}

}
