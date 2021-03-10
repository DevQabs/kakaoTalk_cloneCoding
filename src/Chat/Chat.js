import React from 'react';
import {Message} from './Message';
import {Answer} from './Answer';
import { WriteBox } from './WriteBox';

export const Chat = () => {
    return (
        <>
            <Message />
            <Answer />
            <WriteBox />
        </>
    )
}