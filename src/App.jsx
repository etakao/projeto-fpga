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

  const [triviaToGuess, setTriviaToGuess] = useState(0);
  const [guess, setGuess] = useState("");
  const [actualHint, setActualHint] = useState(0);
  const [isGuessed, setIsGuessed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setTriviaToGuess(trivia[Math.floor(Math.random() * trivia.length)]);
  }, []);

  function reset() {
    setGuess("");
    setActualHint(0);
    setIsGuessed(false);
    setIsModalVisible(false);
    setTriviaToGuess(trivia[Math.floor(Math.random() * trivia.length)]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.toUpperCase() === triviaToGuess.answer.toUpperCase()) {
      setActualHint(5);
      setIsGuessed(true);
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

      <div className={actualHint > 4 ? "options" : "hide"}>
        <button type="button" onClick={() => setIsModalVisible(true)}>
          <Info />
        </button>
        <button type="button" onClick={reset}>Próxima aventura</button>
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
          <button 
            type="submit"
            disabled={(actualHint > 4) && true} 
          >
            Adivinhar
          </button>
        </form>
      </div>

      <div className={isModalVisible ? "overlay" : "hide"} onKeyPress={handleKeyPress}>
        <div className="modal">
          <button type="button" onClick={() => setIsModalVisible(false)}>
            <X size={24} weight="bold" />
          </button>

          <h2>{isGuessed ? "Acertou :)" : "Errou :("}</h2>

          <img 
            src={triviaToGuess.image} 
            alt="Image to guess"
          />

          <span>A resposta era: {triviaToGuess.answer}</span>
          
        </div>

        <Dialog.Root >
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
        </Dialog.Root>
      </div>
    </div>
  )
}

export default App
