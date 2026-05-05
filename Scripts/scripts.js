let tarefas = [];

// Seletores
const btnAdicionar = document.querySelector(".btn");
const totalTarefasEl = document.querySelector(".summary span:nth-of-type(1)");
const totalHorasEl = document.querySelector(".summary span:nth-of-type(2)");
const custoTotalEl = document.querySelector(".price");

// Inputs
const inputs = document.querySelectorAll("input");

btnAdicionar.addEventListener("click", () => {
  const descricao = inputs[0].value;
  const descricao2 = inputs[1].value;
  const descricaoGeral = inputs[2].value;
  const horas = parseFloat(inputs[3].value);
  const custo = parseFloat(inputs[4].value.replace("R$", "").replace(",", "."));

  if (!descricao || !horas || !custo) {
    alert("Preencha os campos corretamente!");
    return;
  }

  const tarefa = {
    descricao,
    descricao2,
    descricaoGeral,
    horas,
    custo
  };

  tarefas.push(tarefa);

  atualizarResumo();
  limparCampos();
});

function atualizarResumo() {
  let totalHoras = 0;
  let custoTotal = 0;

  tarefas.forEach(t => {
    totalHoras += t.horas;
    custoTotal += t.horas * t.custo;
  });

  totalTarefasEl.textContent = tarefas.length;
  totalHorasEl.textContent = totalHoras + " horas";
  custoTotalEl.textContent = formatarMoeda(custoTotal);
}

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function limparCampos() {
  inputs.forEach(input => input.value = "");
}