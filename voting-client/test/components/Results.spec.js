import {Results} from '../../src/components/Results'
import React from 'react'
import ReactDOM from 'react-dom'
import {expect} from 'chai'
import { List, Map } from 'immutable'

import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  scryRenderedDOMComponentsWithClass,
  Simulate
} from 'react-addons-test-utils';

describe('Results', () => {
	it('renders entries with vote counts or zero', () => {
		const pair = List.of('Trainspotting', '28 Days Later')
		const tally = Map({'Trainspotting': 5})

		const component = renderIntoDocument(
			<Results pair={pair} tally={tally} />
		)

		const entries = scryRenderedDOMComponentsWithClass(component, 'entry')
		const [train, days] = entries.map(e => e.textContent)

		expect(entries.length).to.equal(2)
		expect(train).to.contain('Trainspotting')
		expect(train).to.contain('5')
		expect(days).to.contain('28 Days Later')
		expect(days).to.contain('0')
	})

	it('invokes a callback when the "next" button is clicked', () => {
		let nextCalled = false
		const next = () => nextCalled = true

		const pair = List.of('Trainspotting', '28 Days Later');

		const component = renderIntoDocument(
			<Results pair={pair}
				tally={Map()}
				next={next} />
		)

		Simulate.click(ReactDOM.findDOMNode(component.refs.next))

		expect(nextCalled).to.equal(true)
	})

	it('renders just the winner when there is one', () => {
		const pair = List.of('Trainspotting', '28 Days Later');
		const component = renderIntoDocument(
			<Results pair={pair}
				tally={Map()}
				winner="Trainspotting" />
		)

		const winner = ReactDOM.findDOMNode(component.refs.winner)

		expect(winner).to.be.ok
		expect(winner.textContent).to.contain('Trainspotting')
	})

})