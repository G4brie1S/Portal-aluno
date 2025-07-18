// -- Classes

const TIPOS_DE_NOTIFICACAO =[
    "Aviso", "Lembrete", "Urgente", "Evento"
];

class Notificacao {
    constructor(tipo, mensagem, alunoCpfDestino) {
        if (!TIPOS_DE_NOTIFICACAO.includes(tipo)) {
            console.log(`Tipo inexistente: ${tipo}`)
        }
        this.tipo = tipo; // Ex: 'Aviso', 'Lembrete', 'Urgente'
        this.mensagem = mensagem;
        this.alunoCpfDestino = alunoCpfDestino; // CPF do aluno que deve receber a notificação
    }
}

// Teste

class Livro {
  constructor(titulo, ano, autor, editora, arquivoURL, imagem) {
    this.titulo = titulo;
    this.ano = ano;
    this.autor = autor;
    this.editora = editora;
    this.arquivoURL = arquivoURL;
    this.imagem = imagem;
  }
}

// Fim do teste

const TIPOS_DE_NOTA = [
  "VA1", "VA2", "R1", "M1",
  "VA3", "VA4", "R2", "M2",
  "VA5", "VA6", "R3",
  "VA7", "VA8", "R4", "M4",
  "MG"
];

class Nota {
  constructor(materia, tipo, valor) {
    if (!TIPOS_DE_NOTA.includes(tipo)) {
      console.log(`Tipo inexestente: ${tipo}`)
    }

    this.materia = materia;
    this.tipo = tipo;
    this.valor = Number(valor);
  }
}

class Materia {
    constructor(materiaNome, ano, assuntos = [], professor) {
        this.materiaNome = materiaNome;
        this.materiaAno = ano;
        this.assuntos = assuntos;
        this.professor = professor;
    }
}

class Assunto {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }
}

class Simulados {
    constructor(materiaNome = [], acertos, erros, alunoCpfDestino) {
        this.materiaNome = materiaNome;
        this.acertos = Number(acertos);
        this.erros = Number(erros);
    }
}

class HorarioAula {
    constructor(diaSemana, professor) {
        this.diaSemana = diaSemana;
        this.professor = professor;
    }
}

class Professor {
    constructor(nome, materiaLecionada) {
        this.nome = nome;
        this.materiaLecionada = materiaLecionada;
    }
}

class Turma {
    constructor(nome, horarioAulas, professores = []) {
        this.nome = nome;
        this.horarioAulas = horarioAulas; 
        this.professores = professores;
    }
}

class Escola {
    constructor(nome, calendario = []) {
        this.nome = nome;
        this.calendario = calendario;
    }
}

class Login {
    constructor(cpf, senha) {
        this.cpf = cpf;
        this.senha = senha;
    }
}

class Ocorrencia {
    constructor(tipo, descricao, data) {
        this.tipo = tipo;
        this.descricao = descricao;
        this.data = data;
    }
}

class Aluno {
    constructor(nome, login, serie, turma, escola, notas = [], simulados = [], ocorrencias = []) {
        this.nome = nome;
        this.login = login;
        this.serie = serie;
        this.turma = turma; // Objeto Turma
        this.escola = escola; // Objeto Escola
        this.notas = notas; // Array de objetos Nota
        this.simulados = simulados; //Será populado em tempo real
        this.ocorrencias = ocorrencias; // Array de objetos Ocorrencia
    }
}