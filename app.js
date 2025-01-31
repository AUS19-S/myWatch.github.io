let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let watch = setInterval(()=>{
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    if(h < 12){
        html.style.backgroundColor = "#445566";
    } else if(h < 18){
        html.style.backgroundColor = "gold";
    } else if(h > 18){
        html.style.backgroundColor = "#000000";
    }

    if(s < 10) s = "0" + s;
    if(m < 10) m = "0" + m;
    if(h < 10) h = "0" + h;

    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
});
