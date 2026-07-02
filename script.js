let hour = document.querySelector(".hour-hand");
let min = document.querySelector(".min-hand");
let sec = document.querySelector(".sec-hand");
let dh=document.querySelector(".dh")
let dm=document.querySelector(".dm")
let ds=document.querySelector(".ds")

setInterval(()=>{
let time = new Date();
let h = time.getHours();
let m = time.getMinutes();
let s = time.getSeconds();
let hRotation = 30 * h + m / 2;
let mRotation = 6 * m;
let sRotation = 6 * s;

hour.style.transform = ` rotate(${hRotation}deg)`;
min.style.transform = ` rotate(${mRotation}deg)`
sec.style.transform = `rotate(${sRotation}deg)`
dh.innerHTML=h;
dm.innerHTML=m;
dh.innerHTML=h<10?'0'+h:h>12?h-=12:h;
dm.innerHTML=m<10?'0'+m:m;
ds.innerHTML=s<10?'0'+s:s;
})