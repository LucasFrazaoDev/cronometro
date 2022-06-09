let hh = 0;  // variável de contagem para horas
let mm = 0;  // variável de contagem para minutos
let ss = 0;  // variável de contagem para segundos

let time = 1000; // 1 segundo equivale a 1000ms
let cron;

function start() {

    cron = setInterval(() => {
        timer();
    }, time);

    document.getElementById("start").disabled = true;
}

function pause() {
    clearInterval(cron);
    document.getElementById("start").disabled = false;
}

function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById("start").disabled = false;
    document.getElementById('counter').innerText = '00:00:00';
}

function timer() {
    ss++

    if (ss == 59) {
        ss =0;
        mm++
        if (mm == 59) {
            mm = 0;
            hh++;
        }
    }

    let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('counter').innerHTML = format;

    return format

}
