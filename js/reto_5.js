document.getElementById("modeloSelect").addEventListener("change", function () {
  var modelo = this.value;
  var versionSelect = document.getElementById("versionSelect");
  versionSelect.innerHTML = '<option value="">--Seleccionar Versión--</option>';

  if (modelo === "mt") {
    versionSelect.innerHTML += '<option value="mt15">MT-15</option>';
    versionSelect.innerHTML += '<option value="mt03">MT-03</option>';
    versionSelect.innerHTML += '<option value="mt07">MT-07 FI</option>';
    versionSelect.innerHTML += '<option value="mt09">MT-09 SP FI</option>';
    versionSelect.innerHTML += '<option value="mt10">MT-10 SP</option>';
  } else if (modelo === "yzf") {
    versionSelect.innerHTML += '<option value="r3">YZF-R3 FI</option>';
    versionSelect.innerHTML += '<option value="r1">YZF-R1</option>';
    versionSelect.innerHTML += '<option value="r1m">YZF-R1M</option>';
  }
});

document.getElementById("calcularBtn").addEventListener("click", function () {
  var modelo = document.getElementById("modeloSelect").value;
  var version = document.getElementById("versionSelect").value;
  var plazo = parseInt(document.getElementById("plazoSelect").value);
  var prima = parseFloat(document.getElementById("primaInput").value) || 0;
  var imagenMoto = document.getElementById("imagenMoto");
  var resultado = document.getElementById("resultado");

  if (modelo && version && plazo) {
    var precio = 0;
    if (version === "mt15") {
      precio = 2690000;
      imagenMoto.src = "img/MT-15.png";
    } else if (version === "mt03") {
      precio = 4090000;
      imagenMoto.src = "img/MT-03.png";
    } else if (version === "mt07") {
      precio = 6350000;
      imagenMoto.src = "img/MT-07.png";
    } else if (version === "mt09") {
      precio = 9195000;
      imagenMoto.src = "img/Mt-09.png";
    } else if (version === "mt10") {
      precio = 10390000;
      imagenMoto.src = "img/MT-10.png";
    } else if (version === "r3") {
      precio = 4290000;
      imagenMoto.src = "img/R3.png";
    } else if (version === "r1") {
      precio = 13590000;
      imagenMoto.src = "img/R1.png";
    } else if (version === "r1m") {
      precio = 20990000;
      imagenMoto.src = "img/R1M.png";
    }

    var montoFinanciar = precio - prima;
    var tasaInteres = 0.1;
    var n = plazo * 12;
    var i = tasaInteres / 12;

    var cuotaMensual = (montoFinanciar * i) / (1 - Math.pow(1 + i, -n));

    imagenMoto.style.display = "block";
    resultado.innerHTML = `
      <p>El precio de la moto seleccionada es: ₡${precio.toLocaleString()} colones</p>
      <p>Prima: ₡${prima.toLocaleString()} colones</p>
      <p>Monto a financiar: ₡${montoFinanciar.toLocaleString()} colones</p>
      <p>Total a pagar en ${plazo} año(s): ₡${(
      cuotaMensual * n
    ).toLocaleString()} colones</p>
      <p>Cuota mensual: "₡${Math.round(
        cuotaMensual
      ).toLocaleString()} colones"</p>
    `;
  } else {
    resultado.innerHTML = `<p style="color: red;">Por favor selecciona un modelo, una versión, un plazo y una prima.</p>`;
  }
});
