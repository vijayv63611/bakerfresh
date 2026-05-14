function toggleTheme(){
  document.body.classList.toggle("dark");

  const icon = document.querySelector(".theme-btn i");

  if(document.body.classList.contains("dark")){
    icon.classList.remove("bi-moon-stars-fill");
    icon.classList.add("bi-brightness-high-fill");
  } else {
    icon.classList.add("bi-moon-stars-fill");
    icon.classList.remove("bi-brightness-high-fill");
  }
}

function toggleRTL(){
  const html = document.documentElement;

  html.setAttribute(
    "dir",
    html.getAttribute("dir") === "rtl" ? "ltr" : "rtl"
  );
}

/* reveal */
const items = document.querySelectorAll(".reveal");

function reveal(){
  const trigger = window.innerHeight * 0.85;

  items.forEach(el=>{
    if(el.getBoundingClientRect().top < trigger){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();