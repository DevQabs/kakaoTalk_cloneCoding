import React from 'react';
import '../css/style.css';

export const WriteBox = (props) => {
    return (
        <>
        <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossOrigin="anonymous"
        />
        {/* 채팅 작성 양식 - 3컬럼 구성 */}
        <div className="chat__write-container">
            <input type="text" placeholder="Send message" className="chat__write chat__write-input"/>
            
            {/* 컬럼 1 아이콘 */}
            <div className="chat__icon-left chat__icon">
                <i className="far fa-plus-square"/>
            </div>
            
            {/* 컬럼 3 아이콘 */}
            <div className="chat__icon-right chat__icon">
                <span className="chat__write-icon">
                    <i className="far fa-smile"/>
                </span>
                <span className="chat__write-icon">
                    <i className="fas fa-microphone"/>
                </span>
            </div>
        </div>
        </>
    )
}