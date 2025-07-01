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
            window.location.href = '../../pages/grades/grades.html';
          });
        }
      });
    //Componente Logo Vv
    fetch('../../components/logoVv.html')
      .then(res => {
        if (!res.ok) throw new Error('Erro ao carregar logoVV.html');
        return res.text();
      })
      .then(html => {
        document.getElementById('logoVVContainer').innerHTML = html;
      })
      .catch(err => {
        console.error('Erro ao carregar logoVV:', err);
      });
     //Componente Botão de voltar 
    fetch('../../components/backButton.html')
      .then(res => res.text())
      .then(html => {
        const container = document.getElementById('backButtonContainer');
        if (container) container.innerHTML = html;
      })
      .catch(err => {
        console.error('Erro ao carregar botão Voltar:', err);
      });
  });