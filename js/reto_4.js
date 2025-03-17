document.getElementById("lugarSelect").addEventListener("change", function () {
  var lugar = this.value;
  var descripcion = document.getElementById("descripcion");
  var imagenLugar = document.getElementById("imagenLugar");

  switch (lugar) {
    case "suiza":
      descripcion.innerHTML =
        "Suiza es un país montañoso de Europa Central, hogar de numerosos lagos, pueblos y los altos picos de los Alpes.";
      imagenLugar.src = "img/suiza.jpeg";
      imagenLugar.style.display = "block";
      break;
    case "francia":
      descripcion.innerHTML =
        "Francia, en Europa Occidental, abarca ciudades medievales, aldeas alpinas y playas mediterráneas.";
      imagenLugar.src = "img/francia.jpg";
      imagenLugar.style.display = "block";
      break;
    case "italia":
      descripcion.innerHTML =
        "Italia, un país europeo con una larga costa mediterránea, ha dejado una marca poderosa en la cultura y la cocina occidental.";
      imagenLugar.src = "img/italia.jpeg";
      imagenLugar.style.display = "block";
      break;
    case "alemania":
      descripcion.innerHTML =
        "Alemania es un país de Europa Occidental con un paisaje de bosques, ríos, cadenas montañosas y playas del mar del Norte.";
      imagenLugar.src = "img/alemania.jpg";
      imagenLugar.style.display = "block";
      break;
    case "españa":
      descripcion.innerHTML =
        "España, un país de la península ibérica de Europa, incluye 17 regiones autónomas con diversas geografías y culturas.";
      imagenLugar.src = "img/españa.jpeg";
      imagenLugar.style.display = "block";
      break;
    default:
      descripcion.innerHTML = "";
      imagenLugar.style.display = "none";
      break;
  }
});
