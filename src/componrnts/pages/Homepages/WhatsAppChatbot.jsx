// src/WhatsAppChatbot.js

import React, { useState } from 'react';
import { FaRegCommentDots } from 'react-icons/fa';

function WhatsAppChatbot() {
  const [showChatbox, setShowChatbox] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const toggleChatbox = () => {
    setShowChatbox(!showChatbox);
  };

  const appendMessage = (sender, message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender, text: message },
    ]);
  };

  const sendMessage = () => {
    const message = messageInput.trim();

    if (message !== "") {
      appendMessage('user', message);
      setMessageInput("");

      setTimeout(() => {
        appendMessage('bot', 'This is an automated response.');
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="whatsapp-chatbot">
      <div className="whatsapp-icon" onClick={toggleChatbox}>
        <FaRegCommentDots className="messenger-icon" style={{ fontSize: '50px' }} />
      </div>

      {showChatbox && (
        <div className="chatbox-container">
          <div className="chat-header">
            WhatsApp Chat
            <span className="close-chat" style={{ cursor: 'pointer', float: 'right' }} onClick={toggleChatbox}>
              &#10005;
            </span>
          </div>

          <div className="chat-body">
            {messages.map((message, index) => (
              <div key={index} className={message.sender === 'bot' ? 'bot-message' : 'user-message'}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WhatsAppChatbot;