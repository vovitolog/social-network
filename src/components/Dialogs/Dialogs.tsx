import React from 'react';
import classes from './Dialogs.module.css'
import Message, {MessageProps} from "./Message/Message";
import DialogItem, {DialogItemProps} from "./DialogItem/DialogItem";
import {PostProps} from "../Profile/MyPosts/Post/Post";

type DialogsProps = {
    dialogs: DialogItemProps[],
    messages: MessageProps[]
}

const Dialogs = (props: DialogsProps) => {
    let dialogElements = props.dialogs.map((dialog) => {
        return (
            <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
        )
    })

    let messageElements = props.messages.map(m => <Message id={m.id} message={m.message} key={m.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;