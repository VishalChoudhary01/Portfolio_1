// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
let val;
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};
// side Bar Menu
let body = document.querySelector("body");
let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelbtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function () {
  navbar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflowX = "hidden";
  scrollBtn.style.pointerEvents = "none";
};
cancelbtn.onclick = function () {
  navbar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflowX = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close Navigation while we click Nav Menu

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents="auto"
  });
}

// Download File Click
const downloadBtn=document.querySelector("#downloadBtn");
downloadBtn.addEventListener("click",(event)=>{
  const link=document.createElement("a");
  link.setAttribute("download","Resume.pdf");
  link.setAttribute("href","Resume.pdf");
  link.click();
})