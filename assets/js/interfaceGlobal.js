// interfaceGlobal.js

// Carrega HTML de um componente no container e evita cache com timestamp
function carregarComponente(caminho, idContainer) {
  const urlComTimestamp = `${caminho}?t=${Date.now()}`;
  return fetch(urlComTimestamp)
    .then(res => {
      if (!res.ok) throw new Error(`Erro ao carregar ${caminho}`);
      return res.text();
    })
    .then(html => {
      const container = document.getElementById(idContainer);
      if (container) container.innerHTML = html;
    })
    .catch(err => {
      console.error(`Erro ao carregar componente: ${caminho}`, err);
    });
}

// Aguarda elemento aparecer no DOM (com fallback de timeout)
function aguardarElemento(id, callback) {
  const el = document.getElementById(id);
  if (el) {
    callback(el);
    return;
  }

  const observer = new MutationObserver(() => {
    const elEncontrado = document.getElementById(id);
    if (elEncontrado) {
      observer.disconnect();
      callback(elEncontrado);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Segurança: para evitar que fique observando para sempre
  setTimeout(() => observer.disconnect(), 5000);
}

// Configura nome do aluno e botões (perfil e logout)
function configurarCabecalhoAluno() {
  const alunoLogadoJSON = localStorage.getItem('alunoLogado');
  if (!alunoLogadoJSON) return;

  const aluno = JSON.parse(alunoLogadoJSON);

  aguardarElemento('card_nome', (el) => {
    el.textContent = aluno.nome;
  });

  aguardarElemento('logoutButton', (btn) => {
    btn.addEventListener('click', () => {
      localStorage.removeItem('alunoLogado');
      window.location.href = '../loginPage/index.html';
    });
  });

  aguardarElemento('perfilButton', (btn) => {
    btn.addEventListener('click', () => {
      window.location.href = '../perfil/perfil.html';
    });
  });
}
