const btnOpcoes = document.getElementById("btnOpcoes");
const painel = document.getElementById("painel");

const horasInput = document.getElementById("horas");
const valorInput = document.getElementById("valor");
const descontoInput = document.getElementById("desconto");
const total = document.getElementById("total");

// abrir painel
btnOpcoes.addEventListener("click", () => {
  painel.classList.toggle("ativo");
});

// calcular valor
function calcular() {
  let horas = parseFloat(horasInput.value);
  let valor = parseFloat(valorInput.value);

  let subtotal = horas * valor;

  // urgência
  let urgencia = document.querySelector('input[name="urgencia"]:checked').value;
  subtotal += subtotal * (urgencia / 100);

  // desconto
  let desconto = descontoInput.value;
  subtotal -= subtotal * (desconto / 100);

  total.innerText = "R$ " + subtotal.toFixed(2);
}

// eventos
document.querySelectorAll("input").forEach(el => {
  el.addEventListener("input", calcular);
});

// cálculo inicial
calcular();