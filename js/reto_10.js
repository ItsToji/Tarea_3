document
  .getElementById("buscadorForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var cedula = document.getElementById("cedula").value;
    var empleados = {
      109110338: {
        nombre: "Juan",
        apellidos: "Pérez González",
        foto: "img/juan.jpeg",
        lugar: "San José, Costa Rica",
        puesto: "Gerente",
        regimen: "Contributivo",
        ingreso: "01/01/2015",
        departamento: "Finanzas",
      },
      209110338: {
        nombre: "María",
        apellidos: "Rodríguez López",
        foto: "img/maria.jpeg",
        lugar: "Alajuela, Costa Rica",
        puesto: "Analista",
        regimen: "Contributivo",
        ingreso: "15/03/2018",
        departamento: "Recursos Humanos",
      },
      309110338: {
        nombre: "Carlos",
        apellidos: "Jiménez Castro",
        foto: "img/carlos.jpeg",
        lugar: "Heredia, Costa Rica",
        puesto: "Desarrollador",
        regimen: "Contributivo",
        ingreso: "20/07/2020",
        departamento: "Tecnología",
      },
      409110338: {
        nombre: "Ana",
        apellidos: "Martínez Solano",
        foto: "img/ana.jpeg",
        lugar: "Cartago, Costa Rica",
        puesto: "Diseñadora",
        regimen: "Contributivo",
        ingreso: "10/10/2017",
        departamento: "Marketing",
      },
      509110338: {
        nombre: "Luis",
        apellidos: "Gómez Fernández",
        foto: "img/luis.jpeg",
        lugar: "Puntarenas, Costa Rica",
        puesto: "Soporte Técnico",
        regimen: "Contributivo",
        ingreso: "05/05/2019",
        departamento: "Soporte",
      },
    };

    var empleado = empleados[cedula];
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    if (empleado) {
      resultadoDiv.innerHTML = `
            <h3>Información del Empleado</h3>
            <p><strong>Nombre:</strong> ${empleado.nombre}</p>
            <p><strong>Apellidos:</strong> ${empleado.apellidos}</p>
            <p><strong>Lugar:</strong> ${empleado.lugar}</p>
            <p><strong>Puesto:</strong> ${empleado.puesto}</p>
            <p><strong>Régimen:</strong> ${empleado.regimen}</p>
            <p><strong>Fecha de Ingreso:</strong> ${empleado.ingreso}</p>
            <p><strong>Departamento:</strong> ${empleado.departamento}</p>
            <img src="${empleado.foto}" alt="Foto de ${empleado.nombre}" style="max-width: 150px;">
        `;
    } else {
      Swal.fire({
        title: "Error",
        text: "El usuario NO existe",
        icon: "error",
      });
    }
  });
