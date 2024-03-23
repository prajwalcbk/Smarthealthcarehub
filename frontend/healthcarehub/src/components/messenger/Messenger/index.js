import React from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import './Messenger.css';
import Navbar from './../../navbar/Navbar'


export default function Messenger(props) {
    return (
      <div className="messenger">
            <Navbar />
        <div className="scrollable messengersidebar">
          <ConversationList />
        </div>

        <div className="scrollable content">
          <MessageList />
        </div>
      </div>
    );
}