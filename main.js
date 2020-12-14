const menu = document.querySelector(".main-nav");
const bar = document.querySelector(".fa.fa-bars");
bar.addEventListener("click", function () {
  menu.classList.toggle("slide");
});
