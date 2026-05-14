function toggleTheme(){

  document.body.classList.toggle("dark");

  const themeBtn = document.querySelector(".theme-btn i");

  if(document.body.classList.contains("dark")){

    themeBtn.classList.remove("bi-moon-stars-fill");
    themeBtn.classList.add("bi-brightness-high-fill");

  } else {

    themeBtn.classList.remove("bi-brightness-high-fill");
    themeBtn.classList.add("bi-moon-stars-fill");

  }

}


function toggleRTL() {

  const html = document.documentElement;

  if (html.getAttribute("dir") === "rtl") {

    html.setAttribute("dir", "ltr");

  } else {

    html.setAttribute("dir", "rtl");

  }

}