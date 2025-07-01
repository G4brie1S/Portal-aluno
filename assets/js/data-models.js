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

class Materia {
    constructor(materia, ano) {
        this.materiaNome = materia;
        this.materiaAno = ano;
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
        this.simulados = [];
    }
}