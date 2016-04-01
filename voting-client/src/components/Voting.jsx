import React from 'react'

const Voting = ({ pair }) => {
	return (
		<div className="voting">
			Hello worlds
			{pair.map(entry =>
				<button key={entry}>
					<h1>{entry}</h1>
				</button>
			)}
		</div>
	)
}

export default Voting