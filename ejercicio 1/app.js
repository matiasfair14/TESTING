pos = 0;
var caja = document.getElementById("caja");
document.getElementById("caja").addEventListener("click", () => {
  for (let i = 0; i < 862; i++) {
      caja.style.left = i + "px";
  }
});
