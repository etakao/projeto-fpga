import { useEffect, useState } from 'react';
import { Info } from "phosphor-react";

import { quiz } from "./quiz.js";
import './styles/app.scss';

function App() {
  // define the image classname which will gave it the blur effect
  const imageClassNames = [
    "first ", "second ", "third ", "fourth ", "fifth ", "reveal"
  ];

  const [incompletedQuizzes, setIncompletedQuizzes] = useState([]); // incompleted quizzes
  const [quizToGuess, setQuizToGuess] = useState(""); // actual quiz
  const [quizIndex, setQuizIndex] = useState(""); // quiz's index in quiz.js archive
  const [guess, setGuess] = useState(""); // player's guess
  const [actualHint, setActualHint] = useState(0); // actual hint number 
  const [isGuessed, setIsGuessed] = useState(false); // check if the player guessed
  const [isModalVisible, setIsModalVisible] = useState(false); // answer modal visibility
  const [isInfosVisible, setIsInfosVisible] = useState(false); // info modal visibility
  const [isGameCompleted, setIsGameCompleted] = useState(false); // game completed modal visibility

  
  // function to setup the initial quiz
  function setup() {
    let index = Math.floor(Math.random() * quiz.length); // get a random index from the quizzes
    
    setQuizIndex(index);
    setQuizToGuess(quiz[index]);
    setIncompletedQuizzes(Array.from(Array(quiz.length).keys()));
  }

  // function to update the actual quiz to be guessed by the player
  function reset() {
    let index = Math.floor(Math.random() * incompletedQuizzes.length);

    setQuizIndex(incompletedQuizzes[index]);
    setQuizToGuess(quiz[incompletedQuizzes[index]]);
    setGuess("");
    setActualHint(0);
    setIsGuessed(false);
    setIsModalVisible(false);
  }

  // function to get the next random quiz
  function handleNextQuiz() {
    if (incompletedQuizzes.length === 0) {
      setIsGameCompleted(true);
      setIsModalVisible(false);
      return;
    }

    reset();
  }

  // function to verify if player's guess is correct and remove it from incompleted quiz
  function handleSubmit(event) {
    event.preventDefault();
    
    if (guess.toUpperCase() === quizToGuess.answer.toUpperCase()) {
      setActualHint(5);
      setIsGuessed(true);
      setIncompletedQuizzes(incompletedQuizzes.filter(number => number !== quizIndex));
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

  // function to handle the image classname
  function handleImageClassName() {
    return imageClassNames[actualHint];
  }

  // react hook that execute all functions inside it once the page is accessed
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
        <button className={actualHint > 4 ? "default-button" : "invisible-button"} type="button" onClick={handleNextQuiz}>
          Próxima quiz
        </button>
      </div>

      <div className="image-hint">
        <div className="image">
          <img 
            src={quizToGuess.image}
            alt="Image to guess" 
            className={handleImageClassName()}
          />
        </div>

        <ol className="hint">
          <h3>Dicas:</h3>

          {quizToGuess && quizToGuess.hints.map((hint, index) => {
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
            src={quizToGuess.image} 
            alt="Image to guess"
          />

          <span>A resposta era: {quizToGuess.answer}</span>

          <div className="action-buttons">
            <button type="button" onClick={() => setIsModalVisible(false)} className="default-button">Fechar</button>
            <button type="button" onClick={handleNextQuiz} className="default-button">Próxima quiz</button>
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

      <div className="credits">
        © 2022 Erick Yoshike & Willian Sotocorno. All rights reserved.
      </div>
    </div>
  )
}

export default App
