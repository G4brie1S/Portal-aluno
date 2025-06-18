document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal-senha');
  const link = document.querySelector('.forgot-link');
  const btnFechar = document.getElementById('btn-fechar-modal');
  const btnEnviar = document.getElementById('btn-enviar-recuperacao');
  const mensagem = document.getElementById('mensagem-modal');
  const inputCPF = document.getElementById('cpf-recuperacao');

  const cpfValido = '1'; // substituir por validação real no futuro

  link.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.display = 'flex';
    inputCPF.value = '';
    mensagem.textContent = '';
    mensagem.classList.remove('visivel', 'sucesso');
  });

  btnFechar.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  btnEnviar.addEventListener('click', function () {
    const cpf = inputCPF.value.trim();

    if (!cpf) {
      mensagem.textContent = 'Por favor, digite seu CPF.';
      mensagem.classList.add('visivel');
      mensagem.classList.remove('sucesso');
    } else if (cpf !== cpfValido) {
      mensagem.textContent = 'CPF não encontrado.';
      mensagem.classList.add('visivel');
      mensagem.classList.remove('sucesso');
    } else {
      mensagem.textContent = 'Instruções enviadas para o e-mail cadastrado.';
      mensagem.classList.add('visivel', 'sucesso');
    }
  });
});