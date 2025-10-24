import { BtnProx } from "./btnProx";

type Props = {
    titulo: string;
    acertos: number;
    quantidadeQuestoes: number;
    descricao: string;
    reiniciarQuiz: () => void;
}

export function Resultado({titulo, acertos, quantidadeQuestoes, descricao, reiniciarQuiz}: Props) {
    return (
        <>
            <div className="bg-slate-600 text-white p-8 rounded-lg flex flex-col gap-2">
                <h3 className="font-bold text-xl text-center mb-4">{titulo}</h3>
                <p className="font-semibold">Você acertou: {acertos}/{quantidadeQuestoes}</p>
                <p className="font-semibold">{descricao}</p>
            </div>

            <BtnProx 
                texto="Reiniciar Quiz"
                onClick={reiniciarQuiz}
            />
        </>
    );
}