document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("offcanvas-menu");
  const openBtn = document.getElementById("toggle-menu");
  const closeBtn = document.getElementById("close-menu");

  openBtn.addEventListener("click", function () {
      menu.style.left = "0";
  });

  closeBtn.addEventListener("click", function () {
      menu.style.left = "-250px";
  });
});
