import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Actions, Scene, Router } from 'react-native-router-flux'
import { connect } from 'react-redux'
import SideMenu from 'react-native-side-menu'

// components
import Menu from './components/menu'
import Overview from './components/overview'

const mapStateToProps = state => {
	return {
	}
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

const App = class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    
	render() {

		const menu = (
			<Menu
				onItemSelected={value => this.onMenuItemSelected(value)}
			/>
		)

		return (
			<SideMenu
				menu={menu}
				openMenuOffset={270}
				isOpen={this.state.isOpen}
				onChange={isOpen => this.updateMenuState(isOpen)}
			>
				<Router scenes={this.scenes()} />
			</SideMenu>
		)
	}

	toggleMenu() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	updateMenuState(isOpen) {
		this.setState({
			isOpen
		})
	}

	onMenuItemSelected = () => {
		this.setState({
			isOpen: false
		})
	}

	scenes() {
		return Actions.create(
			<Scene key="root" type="replace">
				<Scene
					key="overview"
					hideNavBar={true}
					component={Overview}
					title="Overview"
					type="replace"
					initial={true}
				/>
			</Scene>
		)
	}
        
	
}

App.propTypes = {
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
