import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import App from './src/app'
import Store from './src/store'

const Root = class Measurz extends Component {
	render() {
		return (
			<Provider store={Store}>
				<App />
			</Provider>
		)
	}
}

AppRegistry.registerComponent('ZeroFoxGiven', () => Root)
