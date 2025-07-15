import { verificarLoginAluno } from '../../../assets/js/auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const aluno = verificarLoginAluno();
  if (!aluno) return;

  console.log('Aluno logado:', aluno.nome);
});
