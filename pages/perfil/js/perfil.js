import { verificarLoginAluno } from '../../../assets/js/auth.js';

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
      });
});