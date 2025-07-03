document.addEventListener('DOMContentLoaded', () => {
  const aluno = JSON.parse(localStorage.getItem('alunoLogado'));
  if (!aluno || !Array.isArray(aluno.simulados)) return;

  const container = document.getElementById('simulados-historico');

  function renderizarSimulados() {
    container.innerHTML = '';

    aluno.simulados.forEach(simulado => {
      const box = document.createElement('div');
      box.classList.add('simulado-box');

      const titulo = document.createElement('div');
      titulo.classList.add('simulado-titulo');
      titulo.innerHTML = `
        <span>${simulado.materia}</span>
        <img src="../../../assets/images/selectdropdown.svg" alt="Expandir">
      `;

      const linha = document.createElement('div');
      linha.classList.add('simulado-linha');

      const detalhes = document.createElement('div');
      detalhes.classList.add('simulado-detalhes');
      detalhes.innerHTML = `
        <p class="simulado-acertos">Acertos: ${simulado.acertos}</p>
        <p class="simulado-erros">Erros: ${simulado.erros}</p>
      `;

      box.appendChild(titulo);
      box.appendChild(linha);
      box.appendChild(detalhes);
      container.appendChild(box);

      titulo.addEventListener('click', () => {
        box.classList.toggle('ativo');
      });
    });
  }

  renderizarSimulados();

  const botao = document.querySelector('.btn-acessar-simulados');
  if (botao) {
    botao.addEventListener('click', () => {
      const novoSimulado = gerarSimuladoAleatorio();
      aluno.simulados.push(novoSimulado);
      localStorage.setItem('alunoLogado', JSON.stringify(aluno));
      renderizarSimulados();
    });
  }

  console.log('Aluno logado:', aluno.nome);
  console.log('Simulados:', aluno.simulados);
});

function gerarSimuladoAleatorio() {
  const materias = ['Matemática', 'Português', 'História', 'Geografia', 'Física'];
  const materia = materias[Math.floor(Math.random() * materias.length)];
  const acertos = Math.floor(Math.random() * 11);
  const erros = 10 - acertos;
  return { materia, acertos, erros };
}
