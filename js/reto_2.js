document
  .getElementById("conversionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var monto = parseFloat(document.getElementById("monto").value);
    var tipoCambio = parseFloat(document.getElementById("tipoCambio").value);
    var conversionTipo = document.getElementById("conversionTipo").value;
    var resultado;

    if (conversionTipo === "dolar") {
      resultado = monto * tipoCambio;
      Swal.fire({
        title: "Resultado",
        text: `El monto en colones es: ${resultado.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })} CRC`,
        icon: "success",
      });
    } else if (conversionTipo === "colon") {
      resultado = monto / tipoCambio;
      Swal.fire({
        title: "Resultado",
        text: `El monto en dólares es: ${resultado.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })} USD`,
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Por favor selecciona un tipo de conversión válido.",
        icon: "error",
      });
    }
  });
