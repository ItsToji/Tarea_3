document
  .getElementById("registroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    var estudiante = {
      nombre: nombre,
      apellidos: apellidos,
      notas: [nota1, nota2, nota3],
    };

    var estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
    estudiantes.push(estudiante);
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

    actualizarSelectEstudiantes();
    Swal.fire({
      title: "Éxito",
      text: "Estudiante agregado correctamente",
      icon: "success",
    });

    document.getElementById("registroForm").reset();
  });

document
  .getElementById("calcularPromedioBtn")
  .addEventListener("click", function () {
    var select = document.getElementById("estudiantesSelect");
    var index = select.value;

    if (index === "") {
      Swal.fire({
        title: "Error",
        text: "Seleccione un estudiante",
        icon: "error",
      });
      return;
    }

    var estudiantes = JSON.parse(localStorage.getItem("estudiantes"));
    var estudiante = estudiantes[index];
    var promedio =
      estudiante.notas.reduce((a, b) => a + b, 0) / estudiante.notas.length;

    document.getElementById("resultado").innerText = `El promedio de ${
      estudiante.nombre
    } ${estudiante.apellidos} es ${promedio.toFixed(2)}`;
  });

document
  .getElementById("limpiarRegistrosBtn")
  .addEventListener("click", function () {
    localStorage.removeItem("estudiantes");
    actualizarSelectEstudiantes();
    document.getElementById("resultado").innerText = "";
    Swal.fire({
      title: "Registros Eliminados",
      text: "Todos los registros de estudiantes han sido eliminados.",
      icon: "success",
    });
  });

function actualizarSelectEstudiantes() {
  var select = document.getElementById("estudiantesSelect");
  select.innerHTML = '<option value="">Seleccione un estudiante</option>';

  var estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
  estudiantes.forEach((estudiante, index) => {
    var option = document.createElement("option");
    option.value = index;
    option.text = `${estudiante.nombre} ${estudiante.apellidos}`;
    select.appendChild(option);
  });
}

document.addEventListener("DOMContentLoaded", actualizarSelectEstudiantes);
