var hourHand = document.querySelector('[data-hour-hand]')
var minuteHand = document.querySelector('[data-minute-hand]')
var secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = currentDate.getMinutes() / 60
    const hoursRatio = currentDate.getHours() / 12

    setRotation(hourHand, hoursRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(secondHand, secondsRatio)
}
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()
setInterval(setClock, 1000)