// -- Classes

class Notificacao {
    constructor(tipo, mensagem, alunoCpfDestino) {
        this.tipo = tipo; // Ex: 'Aviso', 'Lembrete', 'Urgente'
        this.mensagem = mensagem;
        this.alunoCpfDestino = alunoCpfDestino; // CPF do aluno que deve receber a notificação
    }
}

class Nota {
    constructor(materia, valor) {
        this.materia = materia;
        this.valor = valor;
    }
}

// Teste

class Materia {
    constructor(materiaNome, ano, assuntos = []) {
        this.materiaNome = materiaNome;
        this.materiaAno = ano;
        this.assuntos = assuntos;
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
        this.alunoCpfDestino = alunoCpfDestino;
    }
}

// Fim do Teste

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
        this.horarioAulas = horarioAulas; // Array de objetos HorarioAula
        this.professores = professores; // Array de objetos Professor
    }
}

class Escola {
    constructor(nome, calendario = []) {
        this.nome = nome;
        this.calendario = calendario; // Array de eventos
    }
}

class Login {
    constructor(cpf, senha) {
        this.cpf = cpf;
        this.senha = senha;
    }
}

class Aluno {
    constructor(nome, login, serie, turma, escola, notas = [], notificacoes = [], simulados = []) {
        this.nome = nome;
        this.login = login;
        this.serie = serie;
        this.turma = turma; // Objeto Turma
        this.escola = escola; // Objeto Escola
        this.notas = notas; // Array de objetos Nota
        this.notificacoes = []; // Será populado em tempo real
        this.simulados = []; //Será populado em tempo real
    }
}