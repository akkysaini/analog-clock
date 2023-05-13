setInterval(() => {
    d = new Date();
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hrotation = 30 * hr + min / 2;
    mrotation = 6 * min;
    srotation = 6 * sec;

    second.style.transform = `rotate(${srotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    hour.style.transform = `rotate(${hrotation}deg)`;
}, 1000);