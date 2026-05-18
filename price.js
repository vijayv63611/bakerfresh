

/* =========================================
   DARK MODE + SUN / MOON TOGGLE
========================================= */

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

themeToggle.onclick = () => {

  /* TOGGLE DARK CLASS */
  document.body.classList.toggle("dark");

  /* CHANGE ICON */
  if(document.body.classList.contains("dark")){

    themeIcon.classList.remove("bi-moon-stars-fill");
    themeIcon.classList.add("bi-sun-fill");

  } else {

    themeIcon.classList.remove("bi-sun-fill");
    themeIcon.classList.add("bi-moon-stars-fill");

  }

};


/* =========================================
   RTL / LTR TOGGLE
========================================= */

const rtlToggle = document.getElementById("rtlToggle");
const rtlText = document.getElementById("rtlText");

rtlToggle.onclick = () => {

  /* TOGGLE RTL CLASS */
  document.body.classList.toggle("rtl");

  /* CHANGE BUTTON TEXT */
  if(document.body.classList.contains("rtl")){

    rtlText.innerHTML = "RTL";

  } else {

    rtlText.innerHTML = "LTR";

  }

};

