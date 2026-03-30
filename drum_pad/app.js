
const keyA = document.querySelector(".keyA");
const keyZ = document.querySelector(".keyZ");
const keyE = document.querySelector(".keyE");
const keyQ = document.querySelector(".keyQ");
const keyS = document.querySelector(".keyS");
const keyD = document.querySelector(".keyD");
const keyW = document.querySelector(".keyW");
const keyX = document.querySelector(".keyX");
const keyC = document.querySelector(".keyC");



/**
 *  ICI je gere la pression  des touches par rapport a chaque div
 * 
 */

document.body.addEventListener("keydown",(even)=>{

    if(even.key == 'a' || even.key == 'A')
    {
      if(keyA)
      {
        keyA.classList.add('playing');
      }
    }
    else if(even.key =='z' || even.key == 'Z')
    {
        if(keyZ){
        keyZ.classList.add('playing'); }

    }
    else if(even.key == 'e' || even.key == 'E')
    {   if(keyE){ 
        keyE.classList.add('playing');}

    }
    else if(even.key == 'q' || even.key == 'Q')
    {
        if(keyQ){ 
        keyQ.classList.add('playing');}

    }
    else if(even.key == 's' || even.key == 'S')
    {
        if(keyS){
        keyS.classList.add('playing'); }

    }
    else if (even.key == 'd' || even.key == 'D')
    {  if(keyD){ 
        keyD.classList.add('playing');}

    }
    else if(even.key == 'w' || even.key == 'W')
    {  if(keyW){ 
        keyW.classList.add('playing');}
    }
    else if(even.key == 'x' || even.key == 'X')
    {  if(keyX){
        keyX.classList.add('playing'); }
    }
    else if(even.key == 'c' || even.key == 'C')    
    {
        if(keyC){ 
        keyC.classList.add('playing');}
    } 
});

/**
 * Ici je gere la touche relaché 
 * 
 */

document.body.addEventListener('keyup',(even)=>{
   if(even.key == 'a' || even.key == 'A')
    {
      if(keyA)
      {
        keyA.classList.remove('playing');
      }
    }
    else if(even.key =='z' || even.key == 'Z')
    {
        if(keyZ){ 
        keyZ.classList.remove('playing');
    }

    }
    else if(even.key == 'e' || even.key == 'E')
    {
        if(keyE){
        keyE.classList.remove('playing'); }

    }
    else if(even.key == 'q' || even.key == 'Q')
    {
        if(keyQ){ 
        keyQ.classList.remove('playing');}

    }
    else if(even.key == 's' || even.key == 'S')
    {   if(keyS){ 
        keyS.classList.remove('playing');}

    }
    else if (even.key == 'd' || even.key == 'D')
    {   if(keyD){
        keyD.classList.remove('playing'); }

    }
    else if(even.key == 'w' || even.key == 'W')
    {   if(keyW){
        keyW.classList.remove('playing'); }

    }
    else if(even.key == 'x' || even.key == 'X')
    {
        if(keyX){
        keyX.classList.remove('playing'); }

    }
    else if(even.key == 'c' || even.key == 'C')    
    {
        if(keyC){ 
        keyC.classList.remove('playing');}
     
    } 

});