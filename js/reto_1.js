document
  .getElementById("facturaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var cliente = document.getElementById("cliente").value;
    var articulo = document.getElementById("articulo").value;
    var cantidad = parseFloat(document.getElementById("cantidad").value);
    var precio = parseFloat(document.getElementById("precio").value);

    var subtotal = cantidad * precio;
    var iva = subtotal * 0.13;
    var servicio = subtotal * 0.05;
    var total = subtotal + iva + servicio;

    Swal.fire({
      title: "Factura Generada",
      html: `
            <p><strong>Nombre del Cliente:</strong> ${cliente}</p>
            <p><strong>Artículo Comprado:</strong> ${articulo}</p>
            <p><strong>Cantidad:</strong> ${cantidad.toLocaleString()}</p>
            <p><strong>Precio:</strong> ${precio.toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })} colones</p>
            <p><strong>Subtotal:</strong> ${subtotal.toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })} colones</p>
            <p><strong>IVA 13%:</strong> ${iva.toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })} colones</p>
            <p><strong>Servicio 5%:</strong> ${servicio.toLocaleString(
              undefined,
              { minimumFractionDigits: 0, maximumFractionDigits: 0 }
            )} colones</p>
            <p><strong>Total a Pagar:</strong> ${total.toLocaleString(
              undefined,
              { minimumFractionDigits: 0, maximumFractionDigits: 0 }
            )} colones</p>
        `,
      icon: "success",
    });
  });
