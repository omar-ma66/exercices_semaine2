

/**
 *  ICI je gere la pression  des touches par rapport a chaque div
 *
 */

let register= false ;
let play    = false ;
const noteRegister = [];

document.body.addEventListener("keydown", (even) => {
  let touche = even.key.toUpperCase();
  const obj = document.querySelector(`div[data-key="${touche}"]`);
  const song = document.querySelector(`audio[data-key="${touche}"]`);
  if(touche == "R")
  {
    register = true ;
        while(noteRegister.length>1)
        {
            noteRegister.pop();
        }
  }
 else if(touche == "P")
  {
    playsound();
  }
 else  if (obj) {
        obj.classList.add("playing");
        if (song) {song.play();}
        if( register)
            noteRegister.push(touche);
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

let songEnCours=false;

function playsound() {
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
  