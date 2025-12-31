/* PASSWORDS */
const pass1="i want to eat your pie";
const pass7="my everyTHING belongs to you";

/* HEARTS */
function hearts(count,type="pink"){
  const box=document.querySelector(".hearts");
  box.innerHTML="";
  for(let i=0;i<count;i++){
    const h=document.createElement("div");
    h.className="heart"+(type==="white"?" white":"");
    h.style.left=Math.random()*100+"%";
    h.style.animationDuration=14+Math.random()*10+"s";
    box.appendChild(h);
  }
}

/* HEARTBEAT */
function heartbeat(){
  let beats=document.querySelectorAll(".beat");
  let i=0;
  setInterval(()=>{
    if(i<beats.length) beats[i++].classList.add("show");
  },1400);
}

