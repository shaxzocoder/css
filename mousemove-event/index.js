const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  let x = e.offsetX;
  let y = e.offsetY;

  cursor.style.setProperty("--x", x + "px");
  cursor.style.setProperty("--y", y + "px");
});