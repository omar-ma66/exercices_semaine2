const keyA = document.querySelector(".keyA");
const keyZ = document.querySelector(".keyZ");
const keyE = document.querySelector(".keyE");
const keyQ = document.querySelector(".keyQ");
const keyS = document.querySelector(".keyS");
const keyD = document.querySelector(".keyD");
const keyW = document.querySelector(".keyW");
const keyX = document.querySelector(".keyX");
const keyC = document.querySelector(".keyC");

const audioKey65 = document.querySelector(".audio-key-65");
const audioKey90 = document.querySelector(".audio-key-90");
const audioKey69 = document.querySelector(".audio-key-69");
const audioKey81 = document.querySelector(".audio-key-81");
const audioKey83 = document.querySelector(".audio-key-83");
const audioKey68 = document.querySelector(".audio-key-68");
const audioKey87 = document.querySelector(".audio-key-87");
const audioKey88 = document.querySelector(".audio-key-88");
const audioKey67 = document.querySelector(".audio-key-67");

/**
 *  ICI je gere la pression  des touches par rapport a chaque div
 *
 */
let sonEnCours = "";
document.body.addEventListener("keydown", (even) => {
    console.log(even);
    
  if (even.key == "a" || even.key == "A") {
    if (keyA) {
      keyA.classList.add("playing");
      traitementDuSong(audioKey65);
    }
  } else if (even.key == "z" || even.key == "Z") {
    if (keyZ) {
      keyZ.classList.add("playing");
      traitementDuSong(audioKey90);
    }
  } else if (even.key == "e" || even.key == "E") {
    if (keyE) {
      keyE.classList.add("playing");
      traitementDuSong(audioKey69);
    }
  } else if (even.key == "q" || even.key == "Q") {
    if (keyQ) {
      keyQ.classList.add("playing");
      traitementDuSong(audioKey81);
    }
  } else if (even.key == "s" || even.key == "S") {
    if (keyS) {
      keyS.classList.add("playing");
      traitementDuSong(audioKey83);
    }
  } else if (even.key == "d" || even.key == "D") {
    if (keyD) {
      keyD.classList.add("playing");
      traitementDuSong(audioKey68);
    }
  } else if (even.key == "w" || even.key == "W") {
    if (keyW) {
      keyW.classList.add("playing");
      traitementDuSong(audioKey87);
    }
  } else if (even.key == "x" || even.key == "X") {
    if (keyX) {
      keyX.classList.add("playing");
      traitementDuSong(audioKey88);
    }
  } else if (even.key == "c" || even.key == "C") {
    if (keyC) {
      keyC.classList.add("playing");
      traitementDuSong(audioKey67);
    }
  }
});

/**
 * Ici je gere la touche relaché
 *
 */

document.body.addEventListener("keyup", (even) => {
  if (even.key == "a" || even.key == "A") {
    if (keyA) {
      keyA.classList.remove("playing");
    }
  } else if (even.key == "z" || even.key == "Z") {
    if (keyZ) {
      keyZ.classList.remove("playing");
    }
  } else if (even.key == "e" || even.key == "E") {
    if (keyE) {
      keyE.classList.remove("playing");
    }
  } else if (even.key == "q" || even.key == "Q") {
    if (keyQ) {
      keyQ.classList.remove("playing");
    }
  } else if (even.key == "s" || even.key == "S") {
    if (keyS) {
      keyS.classList.remove("playing");
    }
  } else if (even.key == "d" || even.key == "D") {
    if (keyD) {
      keyD.classList.remove("playing");
    }
  } else if (even.key == "w" || even.key == "W") {
    if (keyW) {
      keyW.classList.remove("playing");
    }
  } else if (even.key == "x" || even.key == "X") {
    if (keyX) {
      keyX.classList.remove("playing");
    }
  } else if (even.key == "c" || even.key == "C") {
    if (keyC) {
      keyC.classList.remove("playing");
    }
  }
});

function isPlaying(audio) {
  return audio.currenTime > 0;
}

function playsound(audio) {
  audio.play();
}

function traitementDuSong(audio) {
  if (sonEnCours) {
    // il y a un song qui ce joue
    console.log("je controle si le song est en cours");
    if (isPlaying(sonEnCours)) {
      console.log("le song est en cours");
    } else {
      console.log("le song est fini");
      sonEnCours = audio;
      playsound(sonEnCours);
    }
  } else {
    // plus de song en cours
    sonEnCours = audio; // song de la touche A 'clap'
    console.log("je range le song en cours");
    playsound(sonEnCours);
  }
}
