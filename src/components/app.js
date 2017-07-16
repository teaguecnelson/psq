import React from 'react'
import { QuizMeta } from './QuizMeta'
import { MidResult } from './MidResult'
import { Question } from './Question'
import { Results } from './Results'

export class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			i: 0,
			allQuestions: [
			{
				question: "Question 01",
				description: "Question 01's description",
				answers: [
				"Answer 1.1",
				"Answer 1.2",
				"Answer 1.3",
				"Answer 1.4" ]
			},
			{
				question: "Question 02",
				description: "Question 02's description",
				answers: [
				"Answer 2.1",
				"Answer 2.2",
				"Answer 2.3" ]
			},
			{
				question: "Question 03",
				description: "Question 03's description",
				answers: [
				"Answer 3.1",
				"Answer 3.2",
				"Answer 3.3",
				"Answer 3.4",
				"Answer 3.5" ]
			},
			{
				question: "Question 04",
				description: "Question 04's description",
				answers: [
				"Answer 4.1",
				"Answer 4.2",
				"Answer 4.3" ]
			}
		]
		}
		// This binding is necessary to make `this` work in the callback
    	this.incrementCount = this.incrementCount.bind(this);
    	this.decrementCount = this.decrementCount.bind(this);
	}
	countQuestions() {
		return this.state.allQuestions.length
	}
	incrementCount() {
	    this.setState({
	      i: this.state.i + 1
	    });
	}
	decrementCount() {
	    this.setState({
	      i: this.state.i - 1
	    });
	}
	render() {
		const allQuestions = this.state.allQuestions
		let button = null;
	    if (this.state.i>0) {
	      button = <button className="btn" onClick={this.decrementCount}>Previous Question</button>;
	    }
	    if (this.state.i + 1>this.countQuestions()) {
	      return <Results />;
	  	}
		return (
			<div>
			<QuizMeta total={this.countQuestions()}
					  currentQuestion={ this.state.i + 1 } />
			<MidResult />
			<Question question={ this.state.allQuestions[this.state.i]["question"] }
					  description={ this.state.allQuestions[this.state.i]["description"] }
					  answers={ this.state.allQuestions[this.state.i]["answers"] } />
			<button className="btn" onClick={this.incrementCount}>Increment</button>
			{button}
			</div>
		)
	}
}
