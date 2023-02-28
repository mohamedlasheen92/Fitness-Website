let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav");
let header = document.querySelector("header");

// Increase Statistics On Scrolling
const stats = Array.from(document.querySelectorAll('.stats .box h3'));
const statsSection = document.querySelector('.stats');
let check = true;
console.log(stats);
console.log(statsSection);

menu.onclick = function () {
  nav.classList.toggle("active");
  menu.classList.toggle("active");
  menu.classList.toggle("fa-times");
};
window.onscroll = function () {
  nav.classList.remove("active");
  menu.classList.remove("fa-times");
  menu.classList.remove("active");
  if (window.scrollY > 0) header.classList.add("active");
  else header.classList.remove("active");

  // Increase Statistics On Scrolling
  if (window.scrollY >= statsSection.offsetTop - 600) {
    if (check == true) {
      stats.forEach(item => start(item));
      check = false;
    }
  }
};
function start(element) {
  let goal = element.dataset.stats;
  let counter = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) clearInterval(counter);
  }, 3000 / goal)
}


