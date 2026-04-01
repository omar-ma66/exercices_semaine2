/**
 *  ICI je gere la pression  des touches par rapport a chaque div
 *
 */

let isPlaying = false;
let isRecording = false;

let startRecording;

let playListObjet = {
  key: "",
  //   sound: "",
  start: 0,
  end: 0,
  tempo: 0,
  duration: 0,
  //   startEnregistrement: 0,
};
let playListArray = [];
let indexAudio = 0;

document.body.addEventListener("keydown", (even) => {
  // debug even
  console.log(even);

  if (even.repeat) {
    return;
  }

  let toucheAppuyer = even.key.toUpperCase();
  const obj = document.querySelector(`div[data-key="${toucheAppuyer}"]`);
  const song = document.querySelector(`audio[data-key="${toucheAppuyer}"]`);

  if (toucheAppuyer == "R") {
    recording(obj);
  } else if (toucheAppuyer == "P") {
    playing();
  } else {
    obj.classList.add("playing");
    song.play();

    if (isRecording) {
      playListObjet["key"] = toucheAppuyer;
      playListObjet["start"] = new Date().getTime();
      playListObjet["tempo"] = new Date().getTime() - startRecording;
      playListArray[indexAudio] = Object.assign({}, playListObjet);
      indexAudio++;
    }
  }
});

/**
 * Ici je gere la touche relaché
 *
 */

document.body.addEventListener("keyup", (even) => {
  let toucheRelache = even.key.toUpperCase();
  if (toucheRelache != "R") {
    const obj = document.querySelector(`div[data-key="${toucheRelache}"]`);

    // playListArray[indexAudio]["end"] = new Date().getTime();
    // indexAudio++;

    if (obj.classList.contains("playing")) obj.classList.remove("playing");
  }
});

function playSound(keyToPlay, duration, pressing) {
  //   let eventKeyDown = new KeyboardEvent("keydown", { key: keyToPlay });
  //   document.body.dispatchEvent(eventKeyDown);

  let eventKeyDown = new KeyboardEvent("keydown", { key: keyToPlay });
  document.body.dispatchEvent(eventKeyDown);

  setTimeout(() => {
    let eventKeyUp = new KeyboardEvent("keyup", { key: keyToPlay });
    document.body.dispatchEvent(eventKeyUp);
  }, pressing);

  // debug duration et keyToPlay
  console.log(`${duration} : ${keyToPlay}`);
}

function recording(obj) {
  isRecording = !isRecording;
  startRecording = new Date().getTime();

  if (isRecording) {
    obj.classList.add("playing");
    playListArray = [];
    indexAudio = 0;
  } else {
    obj.classList.remove("playing");
    console.log(playListArray);
  }
}

function playing() {
  // console.log(playListArray);

  // playSound("E", 100);
  // playSound("A", 100);
  // playSound("Z", 100);

  playListArray.forEach((objetAudio, i) => {
    setTimeout(() => {
      console.log(objetAudio.key, objetAudio.tempo); // debug
      playSound(objetAudio.key, objetAudio.tempo, 500);
    }, 700 * i);
  });
}
