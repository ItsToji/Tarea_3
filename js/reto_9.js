document
  .getElementById("votacionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var cedula = document.getElementById("cedula").value;
    var correo = document.getElementById("correo").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;

    var voto = {
      nombre: nombre,
      cedula: cedula,
      correo: correo,
      fechaNacimiento: fechaNacimiento,
    };

    var votos = JSON.parse(localStorage.getItem("votos")) || [];
    votos.push(voto);
    localStorage.setItem("votos", JSON.stringify(votos));

    Swal.fire({
      title: "Éxito",
      text: "Voto registrado correctamente",
      icon: "success",
    });

    document.getElementById("votacionForm").reset();
  });

document
  .getElementById("reporteVotosBtn")
  .addEventListener("click", function () {
    var votos = JSON.parse(localStorage.getItem("votos")) || [];
    var reporteDiv = document.getElementById("reporte");
    reporteDiv.innerHTML = "";

    if (votos.length === 0) {
      reporteDiv.innerHTML = "<p>No hay votos registrados.</p>";
      return;
    }

    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    thead.innerHTML = `
        <tr>
            <th>Nombre Completo</th>
            <th>Cédula</th>
            <th>Correo Electrónico</th>
            <th>Año de Nacimiento</th>
        </tr>
    `;

    votos.forEach((voto) => {
      var row = document.createElement("tr");
      row.innerHTML = `
            <td>${voto.nombre}</td>
            <td>${voto.cedula}</td>
            <td>${voto.correo}</td>
            <td>${voto.fechaNacimiento}</td>
        `;
      tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    reporteDiv.appendChild(table);
  });

document
  .getElementById("eliminarRegistrosBtn")
  .addEventListener("click", function () {
    localStorage.removeItem("votos");
    document.getElementById("reporte").innerHTML =
      "<p>No hay votos registrados.</p>";
    Swal.fire({
      title: "Registros Eliminados",
      text: "Todos los registros de votos han sido eliminados.",
      icon: "success",
    });
  });
