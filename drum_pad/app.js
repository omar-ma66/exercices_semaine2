

/**
 *  ICI je gere la pression  des touches par rapport a chaque div
 *
 */

let register= false ;
let play    = false ;
let noteRegister = [];

document.body.addEventListener("keydown", (even) => {
  let touche = even.key.toUpperCase();
  const obj = document.querySelector(`div[data-key="${touche}"]`);
  const song = document.querySelector(`audio[data-key="${touche}"]`);
  if(touche == "R")
  {
    register = true ;
   

        noteRegister  = noteRegister.splice(0,0);
  }
 else if(touche == "P")
  {
    playsound();
  }
 else  if (obj) {
        obj.classList.add("playing");
        if (song) {song.play();}
        if( register)
            noteRegister.push(song);
    }
});

/**
 * Ici je gere la touche relaché
 *
 */

document.body.addEventListener("keyup", (even) => {
  let touche = even.key.toUpperCase();
  const obj = document.querySelector(`div[data-key="${touche}"]`);
  if (obj) {
    if (obj.classList.contains("playing")) 
        obj.classList.remove("playing");
  }
});


 let index = 0;
 let fini = false;
function playsound()
{
  
   console.log(` ${noteRegister[index].duration} `);
noteRegister[index].play();

      
   
}


let songEnCours=false;

function playsound_() {
    let index = 0 ;
    let song ;
while(index < noteRegister.length )
{ 
    if (songEnCours == false)
    {
 song=document.querySelector(`audio[data-key=${noteRegister[index]}]`);
songEnCours = true ;
song.play();
console.log(song)
    }
    else
    {
        if( ! (song.currenTime > 0) )
            {
                songEnCours = false;
                index++;
            }
    }
}
 
}
  