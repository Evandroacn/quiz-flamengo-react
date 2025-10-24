import type { Opcao } from "./Opcao";

export type Pergunta = {
    question: string;
    option: Opcao[];
    answer: number;
}