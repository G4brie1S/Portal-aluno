document.addEventListener('DOMContentLoaded', () => {
  const aluno = JSON.parse(localStorage.getItem('alunoLogado'));
  if (!aluno || !Array.isArray(aluno.notas)) return;

  const container = document.getElementById('all-grades');

  const TIPOS_DE_NOTA_FIXOS = ["VA1", "VA2", "R1", "M1", "VA3", "VA4", "R2", "M2", "VA5", "VA6", "R3", "M3", "VA7", "VA8", "R4", "M4", "MG"];

  function renderizarNotas() {
    container.innerHTML = '';

    const agrupadas = {};

    aluno.notas.forEach(nota => {
      const { materia, tipo, valor } = nota;

      if (!agrupadas[materia]) {
        agrupadas[materia] = [];
      }

      agrupadas[materia].push({ tipo, valor });
    });

    Object.entries(agrupadas).forEach(([materia, notas]) => {
        const box = document.createElement('div');
        box.classList.add('grades-box');

        const titulo = document.createElement('div');
        titulo.classList.add('grades-titulo');
        titulo.innerHTML = `
        <span>${materia}</span>
        <img src="../../../assets/images/selectdropdown.svg" alt="Expandir" style="filter: brightness(0) invert(1)">`;

        const linha = document.createElement('div');
        linha.classList.add('grades-linha');

        const detalhes = document.createElement('div');
        detalhes.classList.add('grades-detalhes');

        const mapaNotas = {};
        notas.forEach(n => mapaNotas[n.tipo] = Number(n.valor));

        // Cálculo de M1 a M4
        const calcularMedia = (tiposEntrada, tipoMedia) => {
            const anteriores = tiposEntrada.map(t => mapaNotas[t]).filter(v => typeof v === 'number');
            mapaNotas[tipoMedia] = anteriores.length >= 2
            ? ((anteriores.sort((a, b) => b - a)[0] + anteriores[1]) / 2).toFixed(1)
            : "-";
        };

        // Calcular MG (média geral)
        const medias = ["M1", "M2", "M3", "M4"]
        .map(m => mapaNotas[m])
        .filter(v => typeof v === 'string' ? !isNaN(parseFloat(v)) : typeof v === 'number');

        if (medias.length === 4) {
        const soma = medias.reduce((acc, val) => acc + parseFloat(val), 0);
        mapaNotas["MG"] = (soma / 2).toFixed(1);
        } else {
        mapaNotas["MG"] = "-";
        }

        calcularMedia(["VA1", "VA2", "R1"], "M1");
        calcularMedia(["VA3", "VA4", "R2"], "M2");
        calcularMedia(["VA5", "VA6", "R3"], "M3");
        calcularMedia(["VA7", "VA8", "R4"], "M4");

        // Montagem visual
        const linhaTipos = TIPOS_DE_NOTA_FIXOS.join('   ');
        const linhaValores = TIPOS_DE_NOTA_FIXOS
        .map(tipo => (mapaNotas[tipo] !== undefined ? mapaNotas[tipo] : '-'))
        .join('   ');

        // Limpar detalhes
        detalhes.innerHTML = '';

        // Criar colunas (cada tipo)
        TIPOS_DE_NOTA_FIXOS.forEach(tipo => {
            const coluna = document.createElement('div');
            coluna.classList.add('nota-coluna');

            const tipoDiv = document.createElement('div');
            tipoDiv.classList.add('nota-tipo');
            tipoDiv.textContent = tipo;

            const valorDiv = document.createElement('div');
            valorDiv.classList.add('nota-valor');
            valorDiv.textContent = mapaNotas[tipo] !== undefined ? mapaNotas[tipo] : '-';

            coluna.appendChild(tipoDiv);
            coluna.appendChild(valorDiv);
            detalhes.appendChild(coluna);
        });
      
        box.appendChild(titulo);
        box.appendChild(linha);
        box.appendChild(detalhes);
        container.appendChild(box);

        titulo.addEventListener('click', () => {
            box.classList.toggle('ativo');
        });
    });
  }
  renderizarNotas();
});
