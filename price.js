const body = document.body;

const html = document.documentElement;

function toggleTheme(){

  body.classList.toggle("dark");

  const btn = document.querySelector(".theme-btn");

  if(body.classList.contains("dark")){

    btn.innerHTML =
    '<i class="bi bi-brightness-high"></i>';

  }else{

    btn.innerHTML =
    '<i class="bi bi-moon-stars"></i>';

  }

}

function toggleRTL(){

  const rtlBtn =
  document.querySelector(".rtl-btn");

  if(html.getAttribute("dir")==="rtl"){

    html.setAttribute("dir","ltr");

    rtlBtn.innerHTML="⇄";

  }else{

    html.setAttribute("dir","rtl");

    rtlBtn.innerHTML="⇆";

  }

}