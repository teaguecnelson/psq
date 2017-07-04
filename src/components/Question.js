import React from 'react'
import PropTypes from 'prop-types'

export const Question = (props) => (
	<div className="question-wrapper">
		<h2>{ props.question }</h2>
		<p>{ props.description }</p>
		<a>{ props.answer01 }</a>
		<a>{ props.answer02 }</a>
		<a>{ props.answer03 }</a>
	</div>
)

Question.defaultProps = {
	question: "Question 0",
	description: "Question 0's description",
	answer01: "Answer 0.1",
	answer02: "Answer 0.2",
	answer03: "Answer 0.3"
}

Question.propTypes = {
	question: PropTypes.string,
	description: PropTypes.string,
	answer01: PropTypes.string,
	answer02: PropTypes.string,
	answer03: PropTypes.string
}