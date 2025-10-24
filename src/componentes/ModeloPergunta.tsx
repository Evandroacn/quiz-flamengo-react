import { useState } from "react";
import type { Pergunta } from "../types/Perguntas";

type Props = {
    pergunta: Pergunta;
    verificaResposta: (acertou: boolean) => void;
}

export function Pergunta({ pergunta, verificaResposta }: Props) {

    const [opcoesEmbaralhadas] = useState(
        () => [...pergunta.option].sort(() => Math.random() - 0.5)
    );

    const [idClicado, setIdClicado] = useState<number | null>(null);

    const handleOptionClick = (idDaOpcao: number) => {
        if (idClicado !== null) return; 

        setIdClicado(idDaOpcao);

        const acertou = idDaOpcao === pergunta.answer;
        
        verificaResposta(acertou);
    }

    const getButtonClass = (idDaOpcao: number) => {
        if (idClicado === null) {
            return 'bg-slate-700 hover:bg-slate-500';
        }
        
        if (idDaOpcao === pergunta.answer) {
            return 'bg-green-600 border-2 border-green-800';
        }

        if (idDaOpcao === idClicado && idDaOpcao !== pergunta.answer) {
            return 'bg-red-600 border-2 border-red-800';
        }
        
        return 'bg-slate-700 opacity-60';
    }

    return (
        <>
            <h3 className="text-2xl p-4 text-center text-white font-bold">{pergunta.question}</h3>
            <div className="grid sm:grid-cols-1 gap-4 md:grid-cols-2">
                
                {opcoesEmbaralhadas.map((opcao) => (
                    <button
                        key={opcao.id}
                        onClick={() => handleOptionClick(opcao.id)}
                        className={`p-4 text-white rounded-lg border-none ${getButtonClass(opcao.id)}`}
                        disabled={idClicado !== null}
                    >
                        {opcao.text} 
                    </button>
                ))}
            </div>
        </>
    );
}