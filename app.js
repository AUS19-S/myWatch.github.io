let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let watch = setInterval(()=>{
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    if(h > 0 && h < 12){
        alert("Good Morning!")
    } else if( h > 12 && h < 18){
        alert("Good Afternoon!")
    } else {
        alert("Good evening")
    }

    if(s < 10) s = "0" + s;
    if(m < 10) m = "0" + m;
    if(h < 10) h = "0" + h;

    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
});