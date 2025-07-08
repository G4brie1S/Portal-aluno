document.addEventListener('DOMContentLoaded', () => {
  const aluno = JSON.parse(localStorage.getItem('alunoLogado'));
  if (!aluno || !Array.isArray(aluno.notas)) return;

  const container = document.getElementById('all-grades');
  
  // Ordem fixa dos tipos de nota
  const TIPOS_DE_NOTA_FIXOS = ["VA1", "VA2", "R1", "M1", "VA3", "VA4", "R2", "M2", "VA5", "VA6", "R3", "M3", "VA7", "VA8", "R4", "M4"];

  function renderizarNotas() {
    container.innerHTML = '';

    // Agrupar notas por matéria
    const agrupadas = {};

    aluno.notas.forEach(nota => {
      const { materia, tipo, valor } = nota;

      if (!agrupadas[materia]) {
        agrupadas[materia] = [];
      }

      agrupadas[materia].push({ tipo, valor });
    });

    // Renderizar as matérias com suas notas
    Object.entries(agrupadas).forEach(([materia, notas]) => {
      const box = document.createElement('div');
      box.classList.add('grades-box');

      const titulo = document.createElement('div');
      titulo.classList.add('grades-titulo');
      titulo.innerHTML = `
        <span>${materia}</span>
        <img src="../../../assets/images/selectdropdown.svg" alt="Expandir" style="filter: brightness(0) invert(1)";>
        
      `;

      const linha = document.createElement('div');
      linha.classList.add('grades-linha');

      const detalhes = document.createElement('div');
      detalhes.classList.add('grades-detalhes');

      // Montar o HTML das notas
      detalhes.innerHTML = notas
        .map(n => `${n.tipo}: ${n.valor}`)
        .join('<br>');

      // Montar e adicionar no container
      box.appendChild(titulo);
      box.appendChild(linha);
      box.appendChild(detalhes);
      container.appendChild(box);

      // Evento para mostrar/ocultar detalhes
      titulo.addEventListener('click', () => {
        box.classList.toggle('ativo');
      });
    });
  }

  renderizarNotas();
});
