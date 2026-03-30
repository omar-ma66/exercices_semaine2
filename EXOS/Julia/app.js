
let boite = document.querySelector('#boite');
let texte = document.querySelector('#texte');

        if(boite)
        {
            boite.addEventListener("mouseenter",(even)=>{
              texte.classList.add("move");
              console.log(" move ");
            })
        }
        if(boite)
        {
            boite.addEventListener("mouseleave",(even)=>{
              texte.classList.remove("move");
              console.log(" move ");
            })
        }