document.querySelectorAll('input[name="color"]').forEach((input) => {
  input.addEventListener("change", function () {
    var color = this.value;
    var imagenCarro = document.getElementById("imagenCarro");

    switch (color) {
      case "blanco":
        imagenCarro.src = "img/carro_blanco.png";
        break;
      case "negro":
        imagenCarro.src = "img/carro_negro.png";
        break;
      case "rojo":
        imagenCarro.src = "img/carro_rojo.png";
        break;
      case "azul":
        imagenCarro.src = "img/carro_azul.png";
        break;
      case "verde":
        imagenCarro.src = "img/carro_verde.png";
        break;
    }
  });
});
