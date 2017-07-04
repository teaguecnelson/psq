import React from 'react'
import PropTypes from 'prop-types'

export const QuizMeta = (props) => (
	<div className="quiz-outline">
		<h1>Robot Vacuum Buying Quiz</h1>
		<p className="question-counter">Question {props.currentnumber} of {props.total}</p>
	</div>
)

QuizMeta.defaultProps = {
	currentnumber: 0,
	total: 0
}

QuizMeta.propTypes = {
	currentnumber: PropTypes.number,
	totalnumber: PropTypes.number
}