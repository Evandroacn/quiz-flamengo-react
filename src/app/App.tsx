import { useState } from "react";
import { BtnProx } from "../componentes/btnProx";
import { Pergunta } from "../componentes/ModeloPergunta"
import { questions } from "../data/perguntas"
import { Resultado } from "../componentes/Resultado";

function getDescricaoResultado(acertos: number, totalQuestoes: number): string {
  const porcentagem = (acertos / totalQuestoes) * 100;

  if (porcentagem === 100) {
    return "PERFEITO! Você é o próprio Zico! Malvadão nível máximo!";
  }
  if (porcentagem >= 70) { // Ex: 70% ou mais
    return "Parabéns!! Você é especialista em flamengo!";
  }
  if (porcentagem >= 40) { // Ex: 40% a 69%
    return "Foi bem, mas tá mais pra torcedor 'simpatizante' do que flamenguista.";
  }
  
  // Menos de 40%
  return "Você é um ANTI FLAMENGUISTA, melhore!";
}

function App() {
  const [showBtnNext, setShowBtnNext] = useState<boolean>(false);

  const [indicePerguntaAtual, setIndicePerguntaAtual] = useState<number>(0);

  const [showResult, setShowResult] = useState<boolean>(false);

  const [qntdAcertos, setQntdAcertos] = useState<number>(0);

  const handleResposta = (acertou: boolean) => {
    if (acertou) {
      setQntdAcertos(qntdAcertos + 1);
    }

    setShowBtnNext(true);
  }

  const showNextQuestion = () => {
    setShowBtnNext(false);

    if (indicePerguntaAtual < questions.length - 1) {
      setIndicePerguntaAtual(indicePerguntaAtual + 1);
    } else {
      setShowResult(true);
    }
  }

  const descricao = getDescricaoResultado(qntdAcertos, questions.length);

  const reiniciarQuiz = () => {
    setIndicePerguntaAtual(0);
    setShowResult(false);
    setQntdAcertos(0);
  }

  return (
    <div className="h-screen w-full bg-slate-900 p-4">
      
      <section className="flex flex-col items-center">
        <h1 className="p-6 text-4xl font-bold text-white text-center">Quiz do Flamengo</h1>

        {!showResult &&
          <div className="bg-slate-600 rounded-xl p-5">
            <Pergunta
              key={indicePerguntaAtual}
              pergunta={questions[indicePerguntaAtual]}
              verificaResposta={handleResposta}
            />
          </div>
        }
        

        {showBtnNext && !showResult &&
          <BtnProx 
          texto={"Próxima Pergunta"}
          onClick={showNextQuestion}
        />
        }

        {showResult &&
          
          <Resultado 
            titulo={"Resultado do Quiz"}
            acertos={qntdAcertos}
            descricao={descricao}
            quantidadeQuestoes={questions.length}
            reiniciarQuiz={reiniciarQuiz}
          />
        }

      </section>

    </div>
  )
}

export default App