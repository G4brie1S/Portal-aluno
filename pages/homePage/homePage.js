document.addEventListener('DOMContentLoaded', function() {
    const alunoLogadoJSON = localStorage.getItem('alunoLogado');
    // const welcomeMessageElement = document.getElementById('welcomeMessage');
    const alunoNomeElement = document.getElementById('alunoNome');
    const alunoSerieElement = document.getElementById('alunoSerie');
    const alunoEscolaElement = document.getElementById('alunoEscola');
    const notificacoesList = document.getElementById('notificacoesList');
    const cardNomeElement = document.getElementById('card_nome');

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
        cardNomeElement.textContent = `${alunoLogado.nome}`;

        // Notificações dos alunos
        if (notificacoesList && alunoLogado.login && alunoLogado.login.cpf) {
        notificacoesList.innerHTML = ''; // Limpa qualquer conteúdo existente

        const notificacoesDoAluno = todasAsNotificacoes.filter(notif =>
            notif.alunoCpfDestino === alunoLogado.login.cpf
        );

        const MAX_CHARS_MENSAGEM = 40; // Limite de caracteres para a mensagem

        notificacoesDoAluno.forEach((notif, index) => {
            const notifItem = document.createElement('div'); // Usamos div para ser um "botão" customizado
            notifItem.classList.add('notificacao-item');
            notifItem.setAttribute('role', 'button'); // Para acessibilidade
            notifItem.setAttribute('tabindex', '0'); // Para ser navegável com teclado
            
            // Adicionar evento de clique (Exemplo: mostrar a notificação completa ou fazer algo)
            notifItem.addEventListener('click', () => {
                alert(`Notificação completa:\nTipo: ${notif.tipo}\nMensagem: ${notif.mensagem}`);
                console.log('Notificação clicada:', notif);
                // Você pode abrir um modal com a notificação completa aqui
            });

            // Cria o cabeçalho da notificação (check + tipo)
            const notifHeader = document.createElement('div');
            notifHeader.classList.add('notificacao-header');

            const checkIcon = document.createElement('span');
            checkIcon.classList.add('notificacao-check-icon');
            checkIcon.textContent = '✔';

            const tipoSpan = document.createElement('span');
            tipoSpan.classList.add('notificacao-tipo');
            tipoSpan.textContent = notif.tipo; // Exibe o tipo da notificação

            notifHeader.appendChild(checkIcon);
            notifHeader.appendChild(tipoSpan);
            notifItem.appendChild(notifHeader);

            // Cria a mensagem truncada
            const mensagemSpan = document.createElement('span');
            mensagemSpan.classList.add('notificacao-mensagem');
            
            // Lógica de truncamento
            const mensagemCompleta = notif.mensagem;
            if (mensagemCompleta.length > MAX_CHARS_MENSAGEM) {
                mensagemSpan.textContent = mensagemCompleta.substring(0, MAX_CHARS_MENSAGEM) + '...';
            } else {
                    mensagemSpan.textContent = mensagemCompleta;
                }
                notifItem.appendChild(mensagemSpan);
                notificacoesList.appendChild(notifItem);
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

    //Componente logo VV
    fetch('../../components/logoVV.html')
        .then(res => {
        if (!res.ok) throw new Error('Erro ao carregar logoVV.html');
        return res.text();
        })
        .then(html => {
        const container = document.getElementById('logoVVContainer');
        if (container) container.innerHTML = html;
        })
        .catch(err => {
        console.error('Erro ao carregar logoVV:', err);
        });
});

document.querySelector('.btn-simulados').addEventListener('click', () => {
    window.location.href = '../simulatedExams/simulatedExams.html'; // coloque o caminho real da página
  });
  
  document.querySelector('.btn-biblioteca-digital').addEventListener('click', () => {
    window.location.href = '../digitalLibrary/digitalLibrary.html';
  });
  
  document.querySelector('.btn-ocorrencias').addEventListener('click', () => {
    window.location.href = '../incidents/incidents.html';
  });
  
  document.querySelector('.btn-avaliacoes').addEventListener('click', () => {
    window.location.href = '../grades/grades.html';
  });
  
  document.querySelector('.btn-calendario-escolar').addEventListener('click', () => {
    window.location.href = '../schoolCalendar/schoolCalendar.html';
  });