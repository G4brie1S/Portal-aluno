document.addEventListener('DOMContentLoaded', () => {
      const aluno = JSON.parse(localStorage.getItem('alunoLogado'));
      if (!aluno || !Array.isArray(aluno.ocorrencias)) return;

      const container = document.getElementById('all-incidents');
      container.innerHTML = '';

      aluno.ocorrencias.forEach(ocorrencia => {
        const box = document.createElement('div');
        box.classList.add('incidents-box');

        const titulo = document.createElement('div');
        titulo.classList.add('incidents-titulo');
        titulo.innerHTML = `
          <span style="width: 100%; display: flex; justify-content: space-between;margin-right: 1rem;"><strong>
          ${ocorrencia.tipo}</strong> ${ocorrencia.data}</span>
          <img src="../../../assets/images/selectdropdown.svg" alt="Expandir" style="filter: brightness(0) invert(1); width: 1rem; height: 1rem;" />
        `;

        const detalhes = document.createElement('div');
        detalhes.classList.add('incidents-detalhes');
        detalhes.textContent = ocorrencia.descricao;

        box.appendChild(titulo);
        box.appendChild(detalhes);
        container.appendChild(box);

        titulo.addEventListener('click', () => {
          box.classList.toggle('ativo');
        });
      });
    });