import React from 'react';

const ChatMessage = ({ data }) => {
  return (
    <div className="chat-message">
			<img src={ data.user.image } alt={ data.user.name }/>
			<div className="content">
				<h2>{ data.user.name }</h2>
				<p>{ data.message }</p>
			</div>
		</div>
  );
};

export default ChatMessage;
