import React from 'react';
import '../css/style.css';

export const Message = (props) => {
    return (
        <li className="incoming-message message">
            <img src="/images/avatar7.jpg" className="message__avatar" />
            <div className="message__content">
                <span className="message__author">Simons</span>
                <span className="message__bubble">
                    This is a test message
                </span>
            </div>
            <span className="message__timestamp">18:55</span>
        </li>
    )
}