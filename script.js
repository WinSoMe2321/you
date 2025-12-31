const pass1="i want to eat your pie";
const pass2="my everyTHING belongs to you";

function checkP1(){
  if(pass.value===pass1) location.href="page2.html";
  else alert("Hehe… only you can unlock this 😉");
}
function checkP2(){
  if(pass.value===pass2) location.href="page8.html";
  else alert("Almost… try again ❤️");
}

/* HEARTS */
function hearts(count){
  let box=document.querySelector(".hearts");
  for(let i=0;i<count;i++){
    let h=document.createElement("div");
    h.className="heart";
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
