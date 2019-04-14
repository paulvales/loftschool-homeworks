import React from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messageInput: '',
      typing: false,
      typingTimeout: 0
    };
  }

  changeInputMessage = event => {
    this.setState({
      messageInput: event.target.value,
      typing: true
    });
    if (this.typingTimeout) clearTimeout(this.typingTimeout);
    this.typingTimeout = setTimeout(() => {
      this.setState({
        typing: false
      });
    }, 800);
  };

  sendMessageOnEnter = event => {
    if (event.key === 'Enter' && this.state.messageInput !== '') {
      this.setState({
        typing: false
      });
      this.setState(({ messages }) => {
        const newMessages = [...messages, { text: this.state.messageInput }];
        return {
          messages: newMessages,
          messageInput: ''
        };
      });
    }
  };

  eachMessage = (msg, index) => <Message key={index} text={msg.text} />;

  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map(this.eachMessage)}
          </div>
          <div
            className={!this.state.typing ? 'typingNow hidden' : 'typingNow'}
          >
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>

        <input
          className="input-message"
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          value={this.state.messageInput}
        />
      </div>
    );
  }
}

export default Chat;
