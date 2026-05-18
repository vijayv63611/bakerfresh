const themeToggle = document.getElementById("themeToggle");
const rtlToggle = document.getElementById("rtlToggle");

/* DARK MODE */
themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
};

/* RTL MODE */
rtlToggle.onclick = () => {
  document.body.classList.toggle("rtl");
};