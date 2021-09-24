let toggle = document.getElementById("toggle");
let vedio = document.getElementById("vedio");
let forward = document.getElementById("forward");
let backward = document.getElementById("backward");
let volum = document.getElementById("volume");
let spd = document.getElementById("speed");
let duratn = document.getElementById("duration");
let divRight = document.getElementById("div-right");
let divLeft = document.getElementById("div-left");

 



//set duration
vedio.onloadedmetadata = () => duratn.setAttribute("max",`${vedio.duration}`);

//Play / Pause
toggle.addEventListener("click", () => {
    if (vedio.paused) {
        vedio.play();
        toggle.innerHTML='❚ ❚';
    } else {
        vedio.pause()
        toggle.innerHTML= "►" ;
    }
})

//all the listners for volume
volum.addEventListener("change",() => vedio.volume = volum.value);
volum.addEventListener("wheel",(event) => {
    (event.deltaY < 0) ? vedio.volume += 0.1 : vedio.volume -= 0.1;
    volum.value = vedio.volume;
});
divRight.addEventListener("wheel",(event) => {
    (event.deltaY < 0) ? vedio.volume += 0.1 : vedio.volume -= 0.1;
    volum.value = vedio.volume;
});

//all the listners for speed
spd.addEventListener("change",() => vedio.playbackRate = spd.value);
spd.addEventListener("wheel",(event) => {
    (event.deltaY < 0) ? vedio.playbackRate += 0.1 : vedio.playbackRate -= 0.1;
    spd.value = vedio.playbackRate;
});
divLeft.addEventListener("wheel",(event) => {
    (event.deltaY < 0) ? vedio.playbackRate += 0.1 : vedio.playbackRate -= 0.1;
    spd.value = vedio.playbackRate;
});

//all listners for vedio duration
duratn.addEventListener("change", () => vedio.currentTime = duratn.value);
duratn.addEventListener("wheel", (event) => {
    if(event.deltaY < 0) {
        vedio.currentTime += 10;
        duratn.value = vedio.currentTime;
    } else {
        vedio.currentTime -= 10;
        duratn.value = vedio.currentTime;
    }
})
duratn.addEventListener("mousemove", (event) => {
    console.log(event);
    console.log(duratn.value);
})

forward.addEventListener("click",() => {
    vedio.currentTime += 10;
    duratn.value = vedio.currentTime;
})
backward.addEventListener("click",() => {
    vedio.currentTime -= 10;
    duratn.value = vedio.currentTime;
})


