import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
    your score:{props.score}<br/>
    Total score:{props.totalScore}
    </div>
    <button id='next-button'onClick={props.tryagain}></button>
    </>
  )
}

export default QuizResult
