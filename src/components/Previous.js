import React from 'react'

export class Previous extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<button onClick={this.decrementCount}>Previous Question</button>
		)
	}
}

