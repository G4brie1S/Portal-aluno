document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal-senha');
  const link = document.querySelector('.forgot-link');
  const btnFechar = document.getElementById('btn-fechar-modal');
  const btnEnviar = document.getElementById('btn-enviar-recuperacao');
  const mensagem = document.getElementById('mensagem-modal');
  const inputCPF = document.getElementById('cpf-recuperacao');

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
    const cpfDigitado = inputCPF.value.trim(); 

    if (!cpfDigitado) {
      mensagem.textContent = 'Por favor, digite seu CPF.';
      mensagem.classList.add('visivel');
      mensagem.classList.remove('sucesso');
    } else {
      // -- Procura o CPF digitado na lista global 'loginsValidos'
      const cpfExiste = loginsValidos.some(login => login.cpf === cpfDigitado);
      if (!cpfExiste) { // -- Se o CPF NÃO for encontrado na lista
        mensagem.textContent = 'CPF não encontrado.';
        mensagem.classList.add('visivel');
        mensagem.classList.remove('sucesso');
      } else { // -- Se o CPF for encontrado
        mensagem.textContent = 'Instruções enviadas para o e-mail cadastrado.';
        mensagem.classList.add('visivel', 'sucesso');
        // -- Fazer uma chamada para o backend aqui para realmente enviar o e-mail
        // console.log('Solicitação de recuperação de senha para CPF:', cpfDigitado);
      }
    }
  });
});