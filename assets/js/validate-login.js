document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.login-form').addEventListener('submit', function (e) {
    const cpf = document.getElementById('cpf').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const erro = document.getElementById('mensagem-erro');

    const cpfValido = '1';
    const senhaValida = '1';

    if (!cpf || !senha) {
      e.preventDefault();
      erro.textContent = '* Por favor, preencha todos os campos.';
      erro.classList.add('visivel');
    } else if (cpf && senha && (cpf !== cpfValido || senha !== senhaValida)) {
      e.preventDefault();
      erro.textContent = '* CPF e/ou senha estão incorretos.';
      erro.classList.add('visivel');  
    } else {
      erro.textContent = '';
      erro.classList.remove('visivel');
    }
  });
});
