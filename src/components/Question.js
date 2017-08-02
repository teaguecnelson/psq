import React from 'react'
import PropTypes from 'prop-types'

export class Question extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		const AnswerList = (props) => {
			const answers = props.answers
			const listItems = answers.map((answer) =>
			<li key={answer}><button onClick={this.props.incrementCount}>{answer}</button></li>
			)
			return (
				<ul>
				  {listItems}
				</ul>
			)
		}
		return (
			<div className="question-wrapper">
				<h2>{ this.props.question }</h2>
				<p>{ this.props.description }</p>
			    <AnswerList answers={this.props.answers}/>
			</div>
		);
	}
}

Question.defaultProps = {
	question: "Question Placeholder",
	description: "Question Description Placeholder",
	answers: "Answers Placeholder"
}

Question.propTypes = {
	question: PropTypes.string,
	description: PropTypes.string,
	answers: PropTypes.array
}