import React from 'react';
import classes from '../Dialogs.module.css'

export type MessageProps = {
    id: number,
    message: string
}

const Message = (props: MessageProps) => {
    return (
        <div className={classes.message}>{props.message}</div>
    );
};

export default Message;