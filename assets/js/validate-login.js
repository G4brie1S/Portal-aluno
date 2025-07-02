document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const cpfDigitado = document.getElementById('cpf').value.trim();
    const senhaDigitada = document.getElementById('senha').value.trim();
    const erro = document.getElementById('mensagem-erro');

    erro.textContent = '';
    erro.classList.remove('visivel');

    if (!cpfDigitado || !senhaDigitada) {
      erro.textContent = '* Por favor, preencha todos os campos.';
      erro.classList.add('visivel');
      return;
    }

    // Use 'loginsValidos' diretamente, que é o array global do seu aluno-data.js
    const credenciaisCorretas = loginsValidos.find(login =>
        login.cpf === cpfDigitado && login.senha === senhaDigitada
    );

    if (credenciaisCorretas) {
      // Se as credenciais estiverem corretas, encontre o objeto completo do aluno
      const alunoEncontrado = alunosCompletos.find(aluno =>
          aluno.login.cpf === cpfDigitado // Busque o aluno pelo CPF
      );
      
      if (alunoEncontrado) {
        console.log('Login bem-sucedido para:', alunoEncontrado.nome);
        localStorage.setItem('alunoLogado', JSON.stringify(alunoEncontrado));
        window.location.href = '../../pages/homePage/homePage.html';
      } 
    } else {
      // Credenciais inválidas
      erro.textContent = '* CPF e/ou senha estão incorretos.';
      erro.classList.add('visivel');
    }
  });
});