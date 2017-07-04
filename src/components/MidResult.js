import React from 'react'
import PropTypes from 'prop-types'

export const MidResult = (props) => (
	<div className="midresult-outline">
		<h2>Current Recommendation</h2>
		<p className="midresult-link">{ props.link }</p>
	</div>
)

MidResult.defaultProps = {
	link: "roomba 502"
}

MidResult.propTypes = {
	link: PropTypes.string
}