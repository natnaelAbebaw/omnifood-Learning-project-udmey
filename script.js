const menu = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");
const body = document.body;
menu.addEventListener("click", function () {
  document.querySelector(".nav").classList.add("open-nav");
});
close.addEventListener("click", function () {
  document.querySelector(".nav").classList.remove("open-nav");
});

body.addEventListener("click", function (e) {
  // console.log(e.target.tagName);
  // console.log(e.target.className);
  e.preventDefault();
  if (e.target.closest("a")) {
    if (e.target.closest("a").getAttribute("href") === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      if (e.target.getAttribute("href").startsWith("#")) {
        const section = document.querySelector(
          `${e.target.getAttribute("href")}`
        );
        const y1 = window.pageYOffset;
        const y2 = section.getBoundingClientRect().top;
        document.querySelector(".nav").classList.remove("open-nav");
        window.scrollTo({
          top: y1 + y2,
          behavior: "smooth",
        });
        // section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
});

// document.addEventListener("scroll", function () {
//   if (window.pageYOffset < 715) {
//     document.body.classList.remove("sticky");
//   }
//   if (window.pageYOffset >= 715) {
//     document.body.classList.add("sticky");
//   }
// });

const hero = document.querySelector(".hero-section");
const observer = new IntersectionObserver(
  function (ent) {
    console.log(ent[0]);
    console.log(ent[1]);
    if (!ent[0].isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent[0].isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // view port
    root: null,
    threshold: 0.1,
  }
);
observer.observe(hero);
