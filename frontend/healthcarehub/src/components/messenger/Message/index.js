import React from 'react';
import moment from 'moment';
import './Message.css';

export default function Message(props) {
    const {
      text,
      isMine,
      startsSequence,
      endsSequence,
      created_at
    } = props;

    return (
      <div className={[
        'message',
        `${isMine ? 'mine' : ''}`,
      ].join(' ')}>
        <div className="bubble-container">
          <div className="bubble" title={created_at}>
            { text }
            <div className="timestamp">
            {created_at}
            </div>
          </div>
        </div>
      </div>
    );
}