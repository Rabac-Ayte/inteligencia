const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Um mamute pequenino chegou na sua porta e pediu pela sua ajuda. O que você faz?",
        alternativas: [
            {
                texto: "Dá no pé rapaz!",
                afirmacao: "Você tentou mandar ele embora,"
            },
            {
                texto: "Precisa do que?",
                afirmacao: "Você tratou ele com paciência, "
            }
        ]
    },
    {
        enunciado: "Eu preciso saber como faz para voar, tlgd? Santos Dumont não criou um avião sozinho com 14 bis",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet e faz um avião, ora bolas",
                afirmacao: "tratou ele com desprezo,"
            },
            {
                texto: "Mas você quer eu te ajude como?",
                afirmacao: "tratou ele bem."
            }
        ]
    },
    {
        enunciado: "Sei lá bro, dá teus pulo, eu só disse que preciso de ajuda",
        alternativas: [
            {
                texto: "Some da minha casa, some da minha vida.",
                afirmacao: "mandou ele embora,"
            },
            {
                texto: "Vem comigo entao",
                afirmacao: "mandou ele ir contigo,"
            }
        ]
    },
    {
        enunciado: "Vocês sobre um prédio de 5 andares. Ele te pergunta o que vocês vão fazer.",
        alternativas: [
            {
                texto: "Malandro é malandro, mané é mané, pode crê que é",
                afirmacao: "Você não contou para ele o seu plano."
            },
            {
                texto: "Você vai pular e alçar vôo de lá de cima.",
                afirmacao: "Você contou para ele o seu plano lendário."
            }
        ]
    },
    {
        enunciado: "Ele está na beira no prédio",
        alternativas: [
            {
                texto: "vai logo",
                afirmacao: "E o resto é história."
            },
            {
                texto: "só vai",
                afirmacao: "E o resto é história. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();