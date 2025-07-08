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

// const notaMatematicaME = new Nota("Matemática", 8.5);
// const notaPortuguesME = new Nota("Português", 7.0);
// const notaCienciasLP = new Nota("Ciências", 7.8);
// const notaGeografiaLP = new Nota("Geografia", 9.2);


// --- 5. Definir Objetos de Login (usados nos Alunos e na lista de logins) ---
const loginArtur = new Login("1", "1"); 
const loginPedro = new Login("2", "2"); 

// --- 6. Definir os Alunos (que usam Login, Turma, Escola, Notas, Notificações) ---
const arturFelipe = new Aluno(
    "Artur Felipe",
    loginArtur,
    "7º Ano",
    turma7AnoA,
    escolaMunicipalSaber,
    [new Nota("Matemática", "VA1", 5),
    new Nota("Matemática", "VA2", 6),
    new Nota("Matemática", "R1", 4),
    new Nota("Português", "VA1", 9),
    new Nota("Português", "VA2", 8),
    new Nota("Português", "VA3", 9),
    new Nota("Geografia", "VA1", 9),
    new Nota("História", "VA1", 9),
    new Nota("Biologia", "VA1", 9),
    new Nota("Física", "VA1", 9)],
    []
);

const pedroLucas = new Aluno( 
    "Pedro Lucas",
    loginPedro,
    "8º Ano",
    turma8AnoB,
    escolaMunicipalSaber,
    [new Nota("Matemática", "VA1", 5),
    new Nota("Matemática", "VA2", 6),
    new Nota("Matemática", "R1", 4),
    new Nota("Português", "VA1", 9),
    new Nota("Português", "VA2", 8),
    new Nota("História", "VA3", 9),],
    []
);

// --- 7. Definir Notificações (usadas nos Alunos) ---
const todasAsNotificacoes = [
    // Notificações para Artur Felipe (CPF: "1")
    // new Notificacao("Azul", "TESTE 1", loginArtur.cpf),
    new Notificacao("Lembrete", "Nova avaliação de Ciências na sexta-feira.", loginArtur.cpf),
    new Notificacao("Aviso", "Lembre-se de trazer o material para a aula de artes.", loginArtur.cpf),
    new Notificacao("Urgente", "Comunicado importante da diretoria sobre o feriado.", loginArtur.cpf),
    new Notificacao("Lembrete", "Não esqueça a tarefa de matemática.", loginArtur.cpf),
    new Notificacao("Aviso", "Sua nota de português já está disponível.", loginArtur.cpf),
    new Notificacao("Evento", "Feira de Ciências da escola será no dia 10/07.", loginArtur.cpf),
    new Notificacao("Lembrete", "Prova de História na próxima segunda.", loginArtur.cpf),
    new Notificacao("Aviso", "Boletim do 1º bimestre liberado.", loginArtur.cpf),
    new Notificacao("Lembrete", "Reunião de pais e mestres no dia 25/06.", loginArtur.cpf),


    // Notificações para Pedro Lucas (CPF: "2")
    new Notificacao("Urgente", "Tarefa de História para amanhã.", loginPedro.cpf),
    new Notificacao("Lembrete", "Não esqueça o trabalho em grupo de geografia.", loginPedro.cpf),
    new Notificacao("Aviso", "A biblioteca terá horário reduzido esta semana.", loginPedro.cpf)
];

// --- 8. Definir as Listas Globais (que usam os objetos de Login e Aluno) ---

const loginsValidos = [loginArtur, loginPedro];

const alunosCompletos = [arturFelipe, pedroLucas];

// --- 9. Definir a Lista Global de Matérias

// const todasAsMaterias = [
//     new Materia("Matemática", "7º Ano", [
//         new Assunto("Frações", "Operações com frações."),
//         new Assunto("Equações do 1º grau", "Resolução de equações simples.")
//     ]),
//     new Materia("Geografia", "7º Ano", [
//         new Assunto("Clima", "Tipos de clima e fatores climáticos."),
//         new Assunto("Relevo", "Formas do relevo e sua formação.")
//     ]),
//     new Materia("Matemática", "6º Ano", [
//         new Assunto("Expressões Numéricas", "Ordem das operações."),
//         new Assunto("Potenciação", "Potências e suas propriedades.")
//     ])
// ];

