const botaoTema = document.getElementById("tema");

botaoTema.onclick = function () {
  document.body.classList.toggle("dark");
  salvarTema();
};

function salvarTema() {
const tema = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("temaPortfolio", tema);
}

function carregarTema() {
  const tema = localStorage.getItem("temaPortfolio");
  if (tema === "dark") {
    document.body.classList.add("dark");
  }
}

carregarTema();
