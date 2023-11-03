const btn = document.querySelector("button");
const nav = document.querySelector("nav");
const close = document.querySelector("span");
const list = document.querySelectorAll("li");
btn.onclick = () => {
  nav.style.width = "350px";
  list.forEach((x) => (x.style.visibility = "visible"));
// nav.classList.remove("none");
};
close.onclick = () => {
  nav.style.width = "0px";
  list.forEach((x) => (x.style.visibility = "hidden"));
// nav.classList.add("none");
};
