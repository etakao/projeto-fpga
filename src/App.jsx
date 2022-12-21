import { useEffect, useState } from 'react';
import { Info } from "phosphor-react";

import { trivia } from "./trivia.js";
import './styles/app.scss';

function App() {
  const imageClassNames = [
    "first ",
    "second ",
    "third ",
    "fourth ",
    "fifth ",
    "reveal"
  ];

  const [incompletedTrivia, setIncompletedTrivia] = useState([]);
  const [triviaToGuess, setTriviaToGuess] = useState("");
  const [triviaIndex, setTriviaIndex] = useState("");
  const [guess, setGuess] = useState("");
  const [actualHint, setActualHint] = useState(0);
  const [isGuessed, setIsGuessed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isInfosVisible, setIsInfosVisible] = useState(false);
  const [isGameCompleted, setIsGameCompleted] = useState(false);

  let index = Math.floor(Math.random() * trivia.length);

  function setup() {
    setTriviaIndex(index);
    setTriviaToGuess(trivia[index]);
    setIncompletedTrivia(Array.from(Array(trivia.length).keys()));
  }

  function reset() {
    let index = Math.floor(Math.random() * incompletedTrivia.length);

    setTriviaIndex(incompletedTrivia[index]);
    setTriviaToGuess(trivia[incompletedTrivia[index]]);
    setGuess("");
    setActualHint(0);
    setIsGuessed(false);
    setIsModalVisible(false);
  }

  function handleNextTrivia() {
    if (incompletedTrivia.length === 0) {
      setIsGameCompleted(true);
      setIsModalVisible(false);
      return;
    }

    reset();
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    if (guess.toUpperCase() === triviaToGuess.answer.toUpperCase()) {
      setActualHint(5);
      setIsGuessed(true);
      setIncompletedTrivia(incompletedTrivia.filter(number => number !== triviaIndex));
      setIsModalVisible(true);
      return;
    }

    if (actualHint === 4) {
      setIsGuessed(false);
      setIsModalVisible(true);
    }

    setActualHint(actualHint + 1);
    setGuess("");
  }

  function handleImageClassName() {
    return imageClassNames[actualHint];
  }

  useEffect(() => {
    setup();
  }, []);

  return (
    <div className="container">
      <h1>Guess To Success</h1>

      <div className="options">
        <button type="button" onClick={() => setIsInfosVisible(true)} className="default-button">
          <Info />
        </button>
        <button className={actualHint > 4 ? "default-button" : "invisible-button"} type="button" onClick={handleNextTrivia}>
          Próxima trivia
        </button>
      </div>

      <div className="image-hint">
        <div className="image">
          <img 
            src={triviaToGuess.image}
            alt="Image to guess" 
            className={handleImageClassName()}
          />
        </div>

        <ol className="hint">
          <h3>Dicas:</h3>

          {triviaToGuess && triviaToGuess.hints.map((hint, index) => {
            if (index <= actualHint) {
              return (
                <li key={index}>{hint}</li>
              );
            }
          })}
        </ol>
      </div>

      <div className="guess">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            id="guess"
            value={guess} 
            onChange={event => setGuess(event.target.value)} 
            required
            autoFocus 
            autoComplete='off'
            disabled={(actualHint > 4) && true} 
          />
          
          {isGuessed ? (
            <button
              type="button"
              onClick={() => setIsModalVisible(true)}
              className="default-button"
            >
              Ver resposta
            </button>
          ) : (
            <button 
              type="submit"
              disabled={(actualHint > 4) && true} 
              className="default-button"
            >
              Adivinhar
            </button>
          )}
        </form>
      </div>

      <div className={isModalVisible ? "overlay" : "invisible"}>
        <div className="modal">
          <h2>{isGuessed ? "Acertou :)" : "Errou :("}</h2>

          <img 
            src={triviaToGuess.image} 
            alt="Image to guess"
          />

          <span>A resposta era: {triviaToGuess.answer}</span>

          <div className="action-buttons">
            <button type="button" onClick={() => setIsModalVisible(false)} className="default-button">Fechar</button>
            <button type="button" onClick={handleNextTrivia} className="default-button">Próxima trivia</button>
          </div>
        </div>
      </div>

      
      <div className={isInfosVisible ? "overlay" : "invisible"}>
        <div className="modal">
          <h2>Sobre o jogo</h2>

          <img src="/assets/INFO.gif" alt="About" />

          <p>O jogo consiste em adivinhar o componente hardware baseado em 5 dicas,
            que são desvendadas uma a uma a cada erro.</p>
          <p>Há também uma imagem para ajudar, que fica mais nítida a cada erro.</p>
          <p>Ao acertar o componente, você pode escolher prosseguir para uma 
            próxima fase.</p>

          <button onClick={() => setIsInfosVisible(false)} className="default-button">Fechar</button>
        </div>
      </div>

      <div className={isGameCompleted ? "overlay" : "invisible"}>
        <div className="modal">
          <img src="/assets/BRAVISSIMO.gif" alt="Applause" />
          
          <h2>PARABÉNS!</h2>

          <span>Você completou todos os desafios!</span>
        </div>
      </div>
    </div>
  )
}

export default App
