import React from 'react';
import '../css/style.css';

export const Answer = (props) => {
    return (
        <li className="sent-message message">
            <span className="message__timestamp">19:22</span>
            <div className="message__content">
                <span className="message__bubble">
                    This is a test answer
                </span>
            </div>
        </li>
    )
}