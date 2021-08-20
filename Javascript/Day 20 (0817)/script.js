
let pointDay = prompt ("계산할 기념일을 입력해 주세요","2021-7-20");
document.getElementById('target').innerHTML = pointDay;

// let days = prompt ("계산할 D-day 일자를 입력해주세요.", "100");

let now = new Date();
let dDay = new Date (pointDay);

let toNow = now.getTime();
let todDay = dDay.getTime();

console.log (toNow, todDay);

let passTime = toNow - todDay;
console.log ("지난 시간 : " + passTime); 

let passDay = Math.floor (passTime / (1000*60*60*24));
console.log ("지난 일자 : " + passDay); 

if (passDay > 0) { 
    document.getElementById('accent').innerHTML = passDay + "일 경과";
} else {
    document.getElementById('accent').innerHTML = passDay*-1 + "일 남음";
 }



//100이후 일자 계산
let itemDate = document.getElementsByClassName('item-date');
let itemPoint = document.getElementById('pointDay');


function calcDate(days) {
let theTime = days * (24 * 60 * 60 * 1000);
let futureTime = todDay + theTime;
let someDay = new Date(futureTime);
console.log(typeof someDay, someDay);

let year = someDay.getFullYear();
let month = someDay.getMonth()+1;
let date = someDay.getDate();

console.log (year, month, date);
let dateId = "date"+days;

if (itemDate) {
    document.getElementById(dateId).innerHTML = year + "년" + month + "월" + date + "일";
}
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
