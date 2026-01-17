const sections = document.querySelectorAll("section");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top < trigger && rect.bottom > 0) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
