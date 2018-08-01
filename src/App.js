import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import ChatList from './components/ChatList';

class App extends Component {

	state = {
		user: {
			name: "",
			image: ""
		},
		ready: false
	};

	onUserChange = (property, value) => {
		let user = Object.assign({}, this.state.user);
		user[property] = value;
		this.setState({ user });
	}

	onReady = (e) => {
		this.setState({ ready: true });
		e.preventDefault();
	}

  render() {
  	const { state } = this;

  	return state.ready
  		? <ChatList user={ state.user } />
  		: <Welcome
  				user={ state.user }
  				onReady={ this.onReady }
  				onUserChange={ this.onUserChange } />;
  }
}

export default App;
