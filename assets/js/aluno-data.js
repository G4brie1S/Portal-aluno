// --- Definição da Escola Comum ---
const calendarioEscolaComum = [
    { data: "2025-07-15", descricao: "Início das Férias de Inverno" },
    { data: "2025-08-01", descricao: "Retorno às Aulas" },
    { data: "2025-10-12", descricao: "Feriado: Dia das Crianças" }
];
const escolaMunicipalSaber = new Escola("Escola Municipal do Saber", calendarioEscolaComum);

// --- 1. Definir Professores Primeiro ---
const profMatematicaME = new Professor("Prof. Ana Silva", "Matemática");
const profPortuguesME = new Professor("Prof. Carlos Santos", "Português");
const profCienciasLP = new Professor("Prof. Laura Viana", "Ciências");
const profGeografiaLP = new Professor("Prof. João Costa", "Geografia");

// --- 2. Definir Aulas (que usam Professores) ---
const aulaMatematicaME = new HorarioAula("Segunda-feira", profMatematicaME);
const aulaPortuguesME = new HorarioAula("Terça-feira", profPortuguesME);
const aulaCienciasLP = new HorarioAula("Quarta-feira", profCienciasLP);
const aulaGeografiaLP = new HorarioAula("Quinta-feira", profGeografiaLP);

// --- 3. Definir Turmas (que usam Aulas e Professores) ---
const turma7AnoA = new Turma("7º Ano A", [aulaMatematicaME, aulaPortuguesME], [profMatematicaME, profPortuguesME]);
const turma8AnoB = new Turma("8º Ano B", [aulaCienciasLP, aulaGeografiaLP], [profCienciasLP, profGeografiaLP]);

// --- 4. Definir Notas (usadas nos Alunos) ---
const notaMatematicaME = new Nota("Matemática", 8.5);
const notaPortuguesME = new Nota("Português", 7.0);
const notaCienciasLP = new Nota("Ciências", 7.8);
const notaGeografiaLP = new Nota("Geografia", 9.2);

// --- 5. Definir Notificações (usadas nos Alunos) ---
const notificacaoAvaliacaoME = new Notificacao("Lembrete", "Nova avaliação de Ciências na sexta-feira.");
const notifTarefaLP = new Notificacao("Aviso Urgente", "Tarefa de História para amanhã.");

// --- 6. Definir Objetos de Login (usados nos Alunos e na lista de logins) ---
const loginArtur = new Login("1", "1"); // CPF '1' e Senha '1' para Artur
const loginPedro = new Login("2", "2"); // CPF '2' e Senha '2' para Pedro

// --- 7. Definir os Alunos (que usam Login, Turma, Escola, Notas, Notificações) ---
const arturFelipe = new Aluno(
    "Artur Felipe",
    loginArtur,
    "7º Ano",
    turma7AnoA,
    escolaMunicipalSaber,
    [notaMatematicaME, notaPortuguesME],
    [notificacaoAvaliacaoME]
);

const pedroLucas = new Aluno( 
    "Pedro Lucas",
    loginPedro,
    "8º Ano",
    turma8AnoB,
    escolaMunicipalSaber,
    [notaCienciasLP, notaGeografiaLP],
    [notifTarefaLP]
);

// --- 8. Definir as Listas Globais (que usam os objetos de Login e Aluno) ---
// Use os nomes corretos dos objetos Login definidos acima
const loginsValidos = [loginArtur, loginPedro];
// Use os nomes corretos dos objetos Aluno definidos acima
const alunosCompletos = [arturFelipe, pedroLucas];