function display() {
    let clock = document.getElementById("clock");
    let time = new Date
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    clock.innerHTML = hour + " : " + minute + " : " + second;
}
setInterval(display, 1000);