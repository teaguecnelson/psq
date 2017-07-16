import React from 'react'
import PropTypes from 'prop-types'



export const Question = (props) => (
	<div className="question-wrapper">
		<h2>{ props.question }</h2>
		<p>{ props.description }</p>
		<a>{ props.answers }</a>
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