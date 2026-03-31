/**
 *  ICI je gere la pression  des touches par rapport a chaque div
 *
 */

let register = false;
let play = false;
let noteRegister = [];

let player = document.querySelector("#player");

document.body.addEventListener("keydown", (even) => {
  let touche = even.key.toUpperCase();
  const obj = document.querySelector(`div[data-key="${touche}"]`);
  const song = document.querySelector(`audio[data-key="${touche}"]`);
  if (touche == "R") {
    register = true;
    noteRegister = noteRegister.splice(0, 0);
  } else if (touche == "P") {
    register = false;
    playsound();
  } else if (obj) {
    obj.classList.add("playing");
    if (song) {
      song.play();
    }
    if (register) noteRegister.push(song);
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
    if (obj.classList.contains("playing")) obj.classList.remove("playing");
  }
});

function playsound() {
  let index = 0;
  player.src = noteRegister[index].src;
  player.play();
  player.addEventListener("ended", (e) => {
    index++;

    if (index < noteRegister.length) {
      player.src = noteRegister[index].src;
      player.play();
    } else {
      console.log("fin de la sequance");
    }
  });
}
