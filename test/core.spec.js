import { expect } from 'chai'
import { List, Map, fromJS } from 'immutable'
import { setEntries, next, vote } from '../src/core'

describe('application logic', () => {
	
	describe('setEntries', () => {
		
		it('adds the entries to the state', () => {
			const state = Map();
			const entries = List.of('Trainspotting', '28 Days Later')
			const nextState = setEntries(state, entries)
			expect(nextState).to.equal(fromJS({
				entries: ['Trainspotting', '28 Days Later']
			}))
		})
		
		it('converts to immutable', () => {
			const state = Map();
			const entries = ['Trainspotting', '28 Days Later']
			
			const nextState = setEntries(state, entries)
			
			expect(nextState).to.equal(fromJS({
				entries: ['Trainspotting', '28 Days Later']
			}))
		})
	})
	
	describe('next', () => {
		
		it('takes the next two entries under vote', () => {
			const state = fromJS({
				entries: ['Trainspotting', '28 Days Later', 'Sunshine' ]
			})
			const nextState = next(state)
			expect(nextState).to.equal(fromJS({
				vote: {
					pair: ['Trainspotting', '28 Days Later']
				},
				entries: ['Sunshine']
			}))
		})
	})
	
	describe('vote', () => {
		
		it('creates a tally for the voted entry', () => {
			const state = fromJS({
				vote: {
					pair: ['Trainspotting', '28 Days Later']
				},
				entries: []
			})
			const nextState = vote(state, 'Trainspotting')
			expect(nextState).to.equal(fromJS({
				vote: {
					pair: ['Trainspotting', '28 Days Later'],
					tally: {
						'Trainspotting': 1
					}
				},
				entries: []
			}))
		})
		it('increments tally for the voted entry', () => {
			const state = fromJS({
				vote: {
					pair: ['Trainspotting', '28 Days Later'],
					tally: {
						'Trainspotting': 3,
						'28 Days Later': 1
					}
				},
				entries: []
			})
			const nextState = vote(state, 'Trainspotting')
			
			expect(nextState).to.equal(fromJS({
				vote: {
					pair: ['Trainspotting', '28 Days Later'],
					tally: {
						'Trainspotting': 4,
						'28 Days Later': 1
					}
				},
				entries: []
			}))
			
		})
		
	})
	
	
})