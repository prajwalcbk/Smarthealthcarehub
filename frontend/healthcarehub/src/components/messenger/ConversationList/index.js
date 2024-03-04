import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './ConversationList.css';

export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  
  useEffect(() => {
    getConversations()
  },[])



 const getConversations = () => {
    axios.get('https://randomuser.me/api/?results=7').then(response => {
        let newConversations = response.data.results.map(result => {
          return {
            photo: result.picture.large,
            name: `${result.name.first} ${result.name.last}`,
            text: 'Hello world! This is a long message that needs to be truncated.'
          };
        });
        setConversations([...conversations, ...newConversations])
    });
  }

    return (
      <div className="conversation-list">

      <div className="toolbar">
        <div className="left-items"> </div>
        <h1 className="toolbar-title"> Messenger </h1>
        <div className="right-items"> <i className="toolbar-button ion-ios-add-circle-outline" /> </div>
      </div>
        
        <div className="conversation-search">
        <input
          type="search"
          className="conversation-search-input"
          placeholder="Search Messages"
        />
      </div>
        {conversations.map(conversation =>
              <div className="conversation-list-item">
                <img className="conversation-photo" src={conversation.photo} alt="conversation" />
                <div className="conversation-info">
                <h1 className="conversation-title">{ conversation.name }</h1>
                </div>
          </div>
          )}
      </div>
    );
}