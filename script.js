const imgs=[...document.querySelectorAll('.gallery img')],box=document.getElementById('lightbox'),big=document.getElementById('lightimg');
let i=0;function show(n){i=(n+imgs.length)%imgs.length;big.src=imgs[i].src;box.style.display='flex';}
imgs.forEach((im,idx)=>im.onclick=()=>show(idx));
close.onclick=()=>box.style.display='none';
next.onclick=()=>show(i+1);prev.onclick=()=>show(i-1);
box.onclick=e=>{if(e.target===box)box.style.display='none';};
