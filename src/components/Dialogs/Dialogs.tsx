import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message, {MessageProps} from "./Message/Message";
import DialogItem, {DialogItemProps} from "./DialogItem/DialogItem";

type DialogsProps = {}

let dialogs: DialogItemProps[] = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Steve'},
    {id: 3, name: 'Brady'},
    {id: 4, name: 'Traver'},
    {id: 5, name: 'Stacy'},
]

let messages: MessageProps[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are You'},
    {id: 3, message: 'Bye'},
]

let dialogElements = dialogs.map((dialog) => {
    return (
        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
    )
})

let messageElements = messages.map(m => <Message id={m.id} message={m.message} key={m.id}/>)

const Dialogs = (props: DialogsProps) => {
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