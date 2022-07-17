const hoursHand = document.querySelector('.hour-hand');
const minutesHand = document.querySelector('.min-hand');
const secondsHand = document.querySelector('.second-hand');
const clockColor = document.querySelector('.clock');
var btn = document.querySelector('.btn');
const headingname = document.getElementById('heading')

function setDate() {
    const date = new Date();
    const seconds = date.getSeconds();
    const secondMovement = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondMovement}deg)`;
    const minutes = date.getMinutes();
    const minutesMovement = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minutesHand.style.transform = `rotate(${minutesMovement}deg)`;
    const hours = date.getHours()
    const hoursMovement = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hoursHand.style.transform = `rotate(${hoursMovement}deg)`
}

setInterval(setDate, 1000)
setDate()

function onDarkMode() {
    btn = document.body;
    btn.classList.toggle('dark-mode');
    headingname.classList.toggle('darkname');
    clockColor.classList.toggle('dark-clock')
}

