const timer2_first = document.querySelector('.timer2_counter_first');
const timer2_second = document.querySelector('.timer2_counter_second');

const timerLoop2 = setInterval(countTimer, 1000);
countTimer();

function countTimer() {

const CurrentTime = new Date();
// const CurrentTime = new Date(2023,0,24,0,45,17);
const StartTime = new Date(2022,5,24,22,0,0)

const yearsStart = StartTime.getFullYear();
const monthsStart = StartTime.getMonth();
const daysStart = StartTime.getDate();
const hoursStart = StartTime.getHours();
const minutesStart = StartTime.getMinutes();
const secsStart = StartTime.getSeconds();

const yearsCurrent = CurrentTime.getFullYear();
const monthsCurrent = CurrentTime.getMonth();
const daysCurrent = CurrentTime.getDate();
const hoursCurrent = CurrentTime.getHours();
const minutesCurrent = CurrentTime.getMinutes();
const secsCurrent = CurrentTime.getSeconds();

const yearsDiff = yearsCurrent - yearsStart;
const monthsDiff = monthsCurrent - monthsStart;
const daysDiff = daysCurrent - daysStart;
const hoursDiff = hoursCurrent- hoursStart;
const minutesDiff = minutesCurrent - minutesStart;
const secsDiff = secsCurrent - secsStart;



// Months and Years

if(monthsDiff > 0) {
    if((daysCurrent == daysStart && hoursCurrent >= hoursStart) ||(daysCurrent > daysStart)){
        YY = yearsDiff;
        MM = monthsDiff;
    } else {
        YY = yearsDiff;
        MM = monthsDiff - 1;
    }
} else if(monthsDiff < 0) {
    if((daysCurrent == daysStart && hoursCurrent >= hoursStart) || (daysCurrent > daysStart)){
        YY = yearsDiff - 1;
        MM = 7 + monthsCurrent;
    } else {
        YY = yearsDiff -1;
        MM = 6 + monthsCurrent;
    }
}else if(monthsDiff == 0) {
    if((daysCurrent == daysStart && hoursCurrent < hoursStart) || (monthsDiff == 0 && daysCurrent < daysStart)){
        YY = yearsDiff -1;
        MM = 11;
    } else {
        YY = yearsDiff;
        MM =0
    }
}




// Days
if((daysCurrent < daysStart) || (daysCurrent == daysStart && hoursCurrent < hoursStart)) {
    if([0,3,5,7,8,10].includes(monthsCurrent)){
        DD = daysCurrent + 6;
    } else if ([4,6,9,11].includes(monthsCurrent)) {
        DD = daysCurrent + 7;
    } else if (monthsCurrent == 2) {
        if ((yearsCurrent % 4) == 0 && (yearsCurrent % 100) == 0 && (yearsCurrent % 400) == 0 ) {
            DD = daysCurrent + 4;
        } else {
            DD = daysCurrent + 3;
        }
    }    
} else {
    DD = daysCurrent - daysStart - 1;
}

//fix days number between hoursStart and 00 h

if(hoursCurrent >= hoursStart){
        DD = DD + 1;
}


//Hours

if(hoursCurrent >= hoursStart) {
    HH = hoursCurrent - hoursStart;
} else {
    HH = hoursCurrent + 2;
};

//Minutes and Secs

const MN = minutesCurrent;
const SS = secsCurrent;



 // secunds word
if ([1,21,31,41,51].includes(SS)) {
    SSWord = ' секунда';
} else if([2,3,4,22,23,24,32,33,34,42,43,44,52,53,54].includes(SS)){
    SSWord = ' секунде';
} else {
    SSWord = ' секунди';
}

//minutes word
if ([1,21,31,41,51].includes(MN)) {
    MNWord = ' минут ';
} else{
    MNWord = ' минута ';
}

//hours word
if(HH == 0){
    HHWord = '';
 } else{
if ([1,21,].includes(HH)) {
    HHWord = ' сат ';
} else if([2,3,4,22,23,24,32,33,34,42,43,44,52,53,54].includes(HH)){
    HHWord = ' сата ';
} else {
    HHWord = ' сати ';
}
 }


//day word
if(DD == 0){
    DDWord = '';
 } else{
if ([1,21,31].includes(DD)) {
    DDWord = ' дан ';
} else {
    DDWord = ' данa ';
}}

//month
if(MM == 0){
    MMWord = '';
 } else{
if ([1].includes(MM)) {
    MMWord = ' месец ';
} else if([2,3,4].includes(MM)){
    MMWord = ' месеца ';
} else {
    MMWord = ' месеци ';
}}


// years word
if(YY == 0){
    YYWord = '';
 } else{
if([2,3,4,22,23,24,32,33,34,42,43,44,52,53,54,62, 62, 64, 72, 73, 74, 82, 83, 84, 92, 93, 94].includes(YY)){
    YYWord = ' године ';
} else {
    YYWord = ' година ';
}}
// console.log(YY, YYWord, MM,MMWord, DD,DDWord, HH,HHWord, MN,MNWord, SS, SSWord)


if(YY == 0){
    YY = ''
}
if (MM == 0){
    MM = ''
}
if (DD == 0){
    DD = ''
}
if (HH == 0){
    HH = ''
}


timer2_first.innerHTML = `${YY + YYWord+ MM + MMWord}`
timer2_second.innerHTML = `${DD +DDWord + HH + HHWord +MN + MNWord +SS + SSWord}`
}