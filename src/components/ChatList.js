import React from 'react';
import ChatMessage from './ChatMessage';

class ChatList extends React.Component {
  state = {
    messages: {},
    input: ''
  }

  componentWillMount() {
    const db = window.firebase.database();
    db.ref('messages').on('value', data => {
      this.setState({ messages: data.val() || {} });
    });
  }

  sendMessage = (e) => {
    e.preventDefault();
    const db = window.firebase.database();
    db.ref('messages/' + Date.now()).set({
      user: this.props.user,
      message: this.state.input
    });
    this.setState({ input: '' });
  }

  componentDidUpdate() {
    this.messagesNode.scrollTop = this.messagesNode.scrollHeight;
  }

  onInputChange = (input) => {
    this.setState({ input })
  }

  render() {
  	const { props, state } = this;

    return (
      <div className='chat-list'>

				<div className="titlebar">
					<h1>Welcome, { props.user.name }</h1>
					<img src={ props.user.image } alt="Profile"/>
					<span className="status" />
				</div>

        <div className="messages" ref={ n => this.messagesNode = n }>
          { Object.keys(state.messages).map(key =>
            <ChatMessage key={ key } data={ state.messages[key] } />
          ) }
        </div>

        <div className="inputbox">
          <form onSubmit={ e => this.sendMessage(e) }>
            <input
                value={ state.input }
                onChange={ e => this.onInputChange(e.target.value) }
                type="text"
                placeholder="Say something..." />
            <input type="submit" value="Send" />
          </form>
        </div>

      </div>
    );
  }
}

export default ChatList;
