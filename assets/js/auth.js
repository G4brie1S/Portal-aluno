export function verificarLoginAluno() {
    const alunoLogadoJSON = localStorage.getItem('alunoLogado');

    if (!alunoLogadoJSON) {
        window.location.href = '../../pages/loginPage/index.html';
        return null;
    }

    return JSON.parse(alunoLogadoJSON);
}