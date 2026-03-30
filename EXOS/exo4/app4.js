const allboites = document.querySelectorAll(".boite");

if (allboites) {
  allboites.forEach((boite) => {
    boite.addEventListener("mousedown", (even) => {
      even.currentTarget.classList.add("scale");
    });
  });
}

if (allboites) {
  allboites.forEach((boite) => {
    boite.addEventListener("mouseup", (even) => {
      even.currentTarget.classList.remove("scale");
    });
  });
}
