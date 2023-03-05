document.getElementById("calcular").addEventListener("click", function () {
  var valorConta = parseFloat(document.getElementById("valor-conta").value);
  var percentualGorjeta = parseFloat(
    document.getElementById("percentual-gorjeta").value
  );

  var valorGorjeta = (valorConta * percentualGorjeta) / 100;
  var valorTotal = valorConta + valorGorjeta;

  document.getElementById("valor-gorjeta").innerText =
    "R$ " + valorGorjeta.toFixed(2);
  document.getElementById("valor-total").innerText =
    "R$ " + valorTotal.toFixed(2);
});
