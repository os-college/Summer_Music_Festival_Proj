const sections = document.querySelectorAll("section");

[...sections].forEach((section) => {
  const checkbox = section.querySelector("input");

    section.classList.toggle("enable-animation");
});
