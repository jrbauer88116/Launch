const initState = {
	sample: ''
}

function thermostat(state = initState, action) {
	switch (action.type) {

	case 'ADJUST_SAMPLE':
		return { ...state, sample: action.sample }

	default:
		return state
	}
}

export default thermostat