let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}
function openModal() {
  const modal = document.getElementById("modal-container");
  modal.classList.add("mostrar");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "modal-container" || e.target.id == "fechar") {
      modal.classList.remove("mostrar");
      localStorage.fechaModal = "modal-container";
    }
  });
}
