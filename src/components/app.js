import React from 'react'
import { QuizMeta } from './QuizMeta'
import { MidResult } from './MidResult'
import { Question } from './Question'

export class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			allQuestions: [
			{
				question: "Question 01",
				description: "Question 01's description",
				answer01: "Answer 1.1",
				answer02: "Answer 1.2",
				answer03: "Answer 1.3"
			},
			{
				question: "Question 02",
				description: "Question 02's description",
				answer01: "Answer 2.1",
				answer02: "Answer 2.2",
				answer03: "Answer 2.3"
			},
			{
				question: "Question 03",
				description: "Question 03's description",
				answer01: "Answer 3.1",
				answer02: "Answer 3.2",
				answer03: "Answer 3.3"
			}
		]
		}
	}
	countQuestions() {
		return this.state.allQuestions.length
	}
	render() {
		const allQuestions = this.state.allQuestions
		return (
			<div>
			<QuizMeta total={this.countQuestions()}
					  currentQuestion={ 2+1 } />
			<MidResult />
			<Question question={ this.state.allQuestions[2]["question"] }
					  description={ this.state.allQuestions[2]["description"] }
					  answer01={ this.state.allQuestions[2]["answer01"] }
					  answer02={ this.state.allQuestions[2]["answer02"] }
					  answer03={ this.state.allQuestions[2]["answer03"] } />
			</div>
		)
	}
}
