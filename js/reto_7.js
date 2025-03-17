document.querySelectorAll("area").forEach((area) => {
  area.addEventListener("click", function (event) {
    event.preventDefault();
    var descripcion = this.getAttribute("data-descripcion");
    Swal.fire({
      title: "Descripción del Objeto",
      text: descripcion,
      icon: "info",
    });
  });
});
