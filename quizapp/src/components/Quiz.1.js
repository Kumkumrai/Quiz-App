import React, { useState } from 'react';
import { QuizData } from './QuizData';
import QuizResult from './QuizResult';

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClikedOption] = useState(0);
  const [showResult, setshowResult] = useState(false);
  
  const changeQuestion = () => {

    updatescore();

    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClikedOption(0);

    } else {
      setshowResult(true);
    }

  }
  
    const updatescore = () => {
      if (clickedOption === QuizData[currentQuestion].answer) {
        setScore(score + 1);
      }
    };

    const resetAll = () => {
      setshowResult(false);
      setCurrentQuestion(0);
      setClikedOption(0);
      setScore(0);
    };

  return (
    <div>
      <p className="heading-txt">QUIZ App</p>
      <div className="container">
        {showResult ? (
          <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
        ) : (
          <>
            <div className="question">
              <samp id="question txt">{QuizData[currentQuestion].question}</samp>
            </div>

            <div className="option-container">
             {QuizData[currentQuestion].options.map((i,val) => {
                return (
                  <button className="option-btn"
                    key={i}
                    onClick={() => setClikedOption(i + 1)}
                  >
                   <h1>{val}</h1>
                  </button>
                );
              })}
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
          </>)}
      </div>
    </div>
  );
}
