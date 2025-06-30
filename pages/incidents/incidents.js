import { verificarLoginAluno } from '../../assets/js/auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const aluno = verificarLoginAluno();
  if (!aluno) return;

  console.log('Aluno logado:', aluno.nome);
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('../../components/alunoHeader.html')
      .then(res => res.text())
      .then(html => {
        document.getElementById('alunoHeaderContainer').innerHTML = html;
  
        // Executa o código que preenche o nome e adiciona o logout
        const alunoLogadoJSON = localStorage.getItem('alunoLogado');
        if (alunoLogadoJSON) {
          const aluno = JSON.parse(alunoLogadoJSON);
          document.getElementById('card_nome').textContent = aluno.nome;
  
          document.getElementById('logoutButton')?.addEventListener('click', function () {
            localStorage.removeItem('alunoLogado');
            window.location.href = '../../pages/incidents/incidents.html';
          });
        }
      });
  });