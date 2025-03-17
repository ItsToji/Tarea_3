document.getElementById("urlSelect").addEventListener("change", function () {
  var url = this.value;
  if (url) {
    Swal.fire({
      title: "Redirigiendo...",
      text: "Serás redirigido a la página seleccionada.",
      icon: "info",
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      window.location.href = url;
    });
  }
});
