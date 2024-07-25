const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenNodes = document.querySelectorAll(".project-container");
hiddenNodes.forEach((element) => observer.observe(element));
