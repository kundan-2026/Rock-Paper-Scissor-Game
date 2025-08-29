// // question number 1...
// let newbtn = document.createElement("button");

// newbtn.innerText = "click me";

// newbtn.style.background = "red";
// newbtn.style.color = "white";

// document.querySelector("body").prepend(newbtn);

// // question number 2...

// let para = document.querySelector("p");
// para.classList.add("newPara");

// console.log(para.classList);

// Active nav link on scroll (simple, minimal)

//
//
//
//

const sections = ["home", "projects", "recs", "contact"].map((id) =>
  document.getElementById(id)
);
const navLinks = [...document.querySelectorAll("nav a")];
const onScroll = () => {
  const y = window.scrollY + 120;
  let current = sections[0].id;
  for (const s of sections) {
    if (y >= s.offsetTop) current = s.id;
  }
  navLinks.forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === "#" + current)
  );
};
document.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Modal (native <dialog>)
const dlg = document.getElementById("modal");
document
  .getElementById("openAbout")
  .addEventListener("click", () => dlg.showModal());
document
  .getElementById("closeModal")
  .addEventListener("click", () => dlg.close());
dlg.addEventListener("click", (e) => {
  if (e.target === dlg) dlg.close();
});
document.querySelectorAll("[data-details]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const title = card.querySelector(".title").textContent;
    const desc = card.querySelector(".desc").textContent;
    document.getElementById(
      "modalBody"
    ).innerHTML = `<h3 style="margin:0 0 8px">${title}</h3><p class="muted">${desc}</p>`;
    dlg.showModal();
  });
});

// Testimonials carousel (1 slide per step, auto + controls + keyboard + drag)
const track = document.querySelector(".slides");
const slides = [...document.querySelectorAll(".testimonial")];
let index = 0,
  x0 = null,
  autoId;
const dotsWrap = document.querySelector(".dots");

const setActive = (i) => {
  index = (i + slides.length) % slides.length;
  const gap = parseInt(getComputedStyle(track).gap) || 0;
  const w = slides[0].getBoundingClientRect().width + gap;
  track.style.transform = `translateX(${-index * w}px)`;
  dotsWrap
    .querySelectorAll(".dot")
    .forEach((d, j) => d.classList.toggle("active", j === index));
};

slides.forEach((_, i) => {
  const d = document.createElement("span");
  d.className = "dot" + (i ? "" : " active");
  d.role = "tab";
  d.tabIndex = 0;
  d.addEventListener("click", () => setActive(i));
  dotsWrap.appendChild(d);
});
const prev = () => setActive(index - 1),
  next = () => setActive(index + 1);
document.querySelector(".car-prev").addEventListener("click", prev);
document.querySelector(".car-next").addEventListener("click", next);
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});
const auto = () => {
  clearInterval(autoId);
  autoId = setInterval(next, 5000);
};
auto();
["mouseenter", "focusin"].forEach((ev) =>
  track.addEventListener(ev, () => clearInterval(autoId))
);
["mouseleave", "focusout"].forEach((ev) => track.addEventListener(ev, auto));
track.addEventListener("pointerdown", (e) => {
  x0 = e.clientX;
  track.setPointerCapture(e.pointerId);
});
track.addEventListener("pointerup", (e) => {
  if (x0 !== null) {
    const dx = e.clientX - x0;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    x0 = null;
  }
});
window.addEventListener("resize", () => setActive(index));

// Contact form (client-only demo)
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.reportValidity()) {
    return;
  }
  const data = Object.fromEntries(new FormData(form).entries());
  document.getElementById(
    "formNote"
  ).textContent = `Thanks ${data.name}! Your message was queued locally.`;
  form.reset();
});

// Year
document.getElementById("year").textContent = new Date().getFullYear();
