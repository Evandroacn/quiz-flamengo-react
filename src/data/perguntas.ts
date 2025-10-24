import type { Pergunta } from "../types/Perguntas";

export const questions: Pergunta[] = [
    {
        question: "Quem fez o gol do título do Flamengo na final da libertadores de 2019?",
        option: [
            {id: 0, text:'Gabigordo'},
            {id: 1, text:'Everton Miteiro'},
            {id: 2, text:'Uno Henrique'},
            {id: 3, text:'Arraxcapeta'}
        ],
        answer: 0
    },
    {
        question: "Quem tem mais gols pelo Flamengo?",
        option: [
            {id: 0, text:'Pedro Queixada'},
            {id: 1, text:'Zico'},
            {id: 2, text:'Gabigordo'},
            {id: 3, text:'Arraxcapeta'}
        ],
        answer: 2
    },
    {
        question: "Quem tem mais jogos pelo Flamengo?",
        option: [
            {id: 0, text:'Adílio'},
            {id: 1, text:'Junior'},
            {id: 2, text:'Zico'},
            {id: 3, text:'Leo Moura'}
        ],
        answer: 1
    },
    {
        question: "Quem tem mais assistências pelo Flamengo?",
        option: [
            {id: 0, text:'Petkovic'},
            {id: 1, text:'Zico'},
            {id: 2, text:'Gabigordo'},
            {id: 3, text:'Arraxcapeta'}
        ],
        answer: 3
    },
]