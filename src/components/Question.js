import React from 'react'
import PropTypes from 'prop-types'

const AnswerList = (props) => {
  const answers = props.answers
  const listItems = answers.map((answer) =>
    <li key={answer}>{answer}</li>
  )
  return (
    <ul>
      {listItems}
    </ul>
  )
}

export const Question = (props) => (
	<div className="question-wrapper">
		<h2>{ props.question }</h2>
		<p>{ props.description }</p>
	    <AnswerList answers={props.answers} />
	</div>
)

Question.defaultProps = {
	question: "Question 0",
	description: "Question 0's description",
	answers: "Answers"
}

Question.propTypes = {
	question: PropTypes.string,
	description: PropTypes.string,
	answers: PropTypes.array
}