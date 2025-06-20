document.addEventListener('DOMContentLoaded', function() {
    const alunoLogadoJSON = localStorage.getItem('alunoLogado');
    const welcomeMessageElement = document.getElementById('welcomeMessage');
    const alunoNomeElement = document.getElementById('alunoNome');
    const alunoSerieElement = document.getElementById('alunoSerie');
    const alunoEscolaElement = document.getElementById('alunoEscola');
    const notificacoesList = document.getElementById('notificacoesList');

    // 1. VERIFICAÇÃO DE LOGIN: Redireciona se não houver aluno logado
    if (!alunoLogadoJSON) {
        window.location.href = '../../pages/loginPage/index.html'; 
        return; 
    }
    
    // 2. Se há um aluno logado, exibe as informações
    const alunoLogado = JSON.parse(alunoLogadoJSON);
    if (alunoLogado.nome) {
        // welcomeMessageElement.textContent = `Bem-vindo(a), ${alunoLogado.nome}!`;
        alunoSerieElement.textContent = `${alunoLogado.serie}`;
        alunoEscolaElement.textContent = `${alunoLogado.escola.nome}`;
        alunoNomeElement.textContent = `${alunoLogado.nome}`;

        // Notificações dos alunos
        if (notificacoesList && alunoLogado.login && alunoLogado.login.cpf) {
            notificacoesList.innerHTML = ''; // Limpa qualquer conteúdo existente

            // Filtra as notificações globais pelo CPF do aluno logado
            const notificacoesDoAluno = todasAsNotificacoes.filter(notif =>
                notif.alunoCpfDestino === alunoLogado.login.cpf
            );

            notificacoesDoAluno.forEach(notif => {
                const notifDiv = document.createElement('div');
                notifDiv.classList.add('notificacao-item');

                const checkIcon = document.createElement('span');
                checkIcon.classList.add('notificacao-check-icon');
                checkIcon.textContent = '✔'; 

                const mensagemSpan = document.createElement('span');
                mensagemSpan.textContent = notif.mensagem;

                notifDiv.appendChild(checkIcon);
                notifDiv.appendChild(mensagemSpan);

                notificacoesList.appendChild(notifDiv);
            });
        }               
    }

    // NOVO: Adiciona a lógica para o botão de Voltar 
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            localStorage.removeItem('alunoLogado'); // Limpa os dados do aluno
            window.location.href = '../../pages/loginPage/index.html'; // Redireciona para a página de login
        });
    }
});