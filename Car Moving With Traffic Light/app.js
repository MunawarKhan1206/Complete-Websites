document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("car"),t=document.getElementById("traffic-light"),n=!1;function l(){n?(t.src="green.jpg",e.style.transition="left 10s linear",e.style.left="90%"):(t.src="red.jpg",e.style.transition="none",e.style.left="0"),n=!n}function i(){l(),setTimeout(()=>{l(),setTimeout(i,19e3)},9e3)}i()});