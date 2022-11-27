import { useEffect, useState } from 'react';
import { X, Info } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

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

  let index = Math.floor(Math.random() * trivia.length);

  const [triviaToGuess, setTriviaToGuess] = useState("");
  const [triviaIndex, setTriviaIndex] = useState(index);
  const [guess, setGuess] = useState("");
  const [actualHint, setActualHint] = useState(0);
  const [isGuessed, setIsGuessed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isInfosVisible, setIsInfosVisible] = useState(false);
  const [guessed, setGuessed] = useState([]);

  useEffect(() => {
    setTriviaToGuess(trivia[index]);
  }, []);

  function reset() {
    console.log(guessed);

    while (guessed.includes(index)) {
      index = Math.floor(Math.random() * trivia.length);
    }

    setTriviaIndex(index);
    setTriviaToGuess(trivia[index]);
    setGuess("");
    setActualHint(0);
    setIsGuessed(false);
    setIsModalVisible(false);

  }

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.toUpperCase() === triviaToGuess.answer.toUpperCase()) {
      setActualHint(5);
      setIsGuessed(true);
      setIsModalVisible(true);
      setGuessed([...guessed, triviaIndex])
      return;
    }

    if (actualHint === 4) {
      setIsGuessed(false);
      setIsModalVisible(true);
    }

    setActualHint(actualHint + 1);
    setGuess("");
  }

  function handleKeyPress(event) {
    if(event.which === 27) {
      setIsModalVisible(false);
    }
  }

  function handleImageClassName() {
    return imageClassNames[actualHint];
  }

  return (
    <div className="container">
      <h1>Projeto de FPGA</h1>

      <div className="options">
        <button type="button" onClick={() => setIsInfosVisible(true)} className="default-button">
          <Info />
        </button>
        <button className={actualHint > 4 ? "show default-button" : "hide"} type="button" onClick={reset}>Próxima trivia</button>
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

      <div className={isModalVisible ? "overlay" : "hide"} onKeyPress={handleKeyPress}>
        <div className="modal">
          <button type="button" onClick={() => setIsModalVisible(false)} className="close-button">
            <X size={24} weight="bold" />
          </button>

          <h2>{isGuessed ? "Acertou :)" : "Errou :("}</h2>

          <img 
            src={triviaToGuess.image} 
            alt="Image to guess"
          />

          <span>A resposta era: {triviaToGuess.answer}</span>

          <div className="action-buttons">
            <button type="button" onClick={() => setIsModalVisible(false)} className="default-button">Fechar</button>
            <button type="button" onClick={reset} className="default-button">Próxima trivia</button>
          </div>
        </div>

        {/* <Dialog.Root >
          <Dialog.Trigger />
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title>
                {isGuessed ? "Acertou :)" : "Errou :("}
              </Dialog.Title>

              <Dialog.Description />
              <Dialog.Close>

              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root> */}
      </div>

      <div className={isInfosVisible ? "overlay" : "hide"}>
        <div className="modal">
          <h1>O jogo</h1>

          <p>O jogo consistem em...</p>

          <button onClick={() => setIsInfosVisible(false)} className="default-button">Fechar</button>
        </div>
      </div>
    </div>
  )
}

export default App
