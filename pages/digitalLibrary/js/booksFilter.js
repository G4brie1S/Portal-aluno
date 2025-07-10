// class Livro {
//   constructor(titulo, ano, autor, editora, arquivoURL) {
//     this.titulo = titulo;
//     this.ano = ano;
//     this.autor = autor;
//     this.editora = editora;
//     this.arquivoURL = arquivoURL;
//   }
// }

// const livros = [
//   new Livro("Dom Casmurro", 1899, "Machado de Assis", "-", "assets/books/MEMÓRIAS_PÓSTUMAS_DE_BRÁS_CUBAS.pdf"),
//   new Livro("Memórias póstumas de Brás Cubas", 1994, "Machado de Assis", "BibVirt", "assets/books/MEMÓRIAS_PÓSTUMAS_DE_BRÁS_CUBAS.pdf"),
//   new Livro("A divina comédia", 2003, "Dante Alighieri", "eBookBrasil", "assets/books/MEMÓRIAS_PÓSTUMAS_DE_BRÁS_CUBAS.pdf"),
// ];


function renderizarLivrosNaTela(listaFiltrada) {
    const container = document.querySelector('.listaLivrosContainer');
    container.innerHTML = '<header>Arquivos da Biblioteca</header>';

    if (listaFiltrada.length === 0) {
        container.innerHTML += `<p style="padding: 1rem;">Nenhum livro encontrado.</p>`;
        console.log('Nenhum livro encontrado');
        return;
    }

    listaFiltrada.forEach(livro => {
    const livroDiv = document.createElement('div');
    livroDiv.classList.add('livro-item');
    livroDiv.innerHTML = `
        <h4>${livro.titulo}</h4>
        <p><strong>Autor:</strong> ${livro.autor}</p>
        <a href="${livro.arquivoURL}" download class="btn-download">Baixar</a>
    `;
    container.appendChild(livroDiv);
    });
}

function filtrarLivros() {
    const titulo = document.querySelector('.tituloInput').value.toLowerCase();
    const autor = document.querySelector('.autorInput').value.toLowerCase();
    const editora = document.querySelector('.editoraInput').value.toLowerCase();
    const ano = document.querySelector('.anoInput').value.trim();

    const livrosFiltrados = livros.filter(livro => {
    const correspondeTitulo = livro.titulo.toLowerCase().includes(titulo);
    const correspondeAutor = livro.autor.toLowerCase().includes(autor);
    const correspondeEditora = livro.editora.toLowerCase().includes(editora);
    const correspondeAno = ano === "" || String(livro.ano) === ano;

    return correspondeTitulo && correspondeAutor && correspondeEditora && correspondeAno;
    });

    renderizarLivrosNaTela(livrosFiltrados);
}

document.addEventListener('DOMContentLoaded', () => {
    const botaoPesquisar = document.querySelector('.pesquisarButton');

    if (botaoPesquisar) {
    botaoPesquisar.addEventListener('click', () => {
        console.log('Botão Pesquisar clicado');
        filtrarLivros();
    });
    } else {
    console.error('Botão .pesquisarButton não encontrado no DOM.');
    }

    // Exibir todos os livros inicialmente
    renderizarLivrosNaTela(livros);
});