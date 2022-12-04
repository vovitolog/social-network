import React from 'react';
import classes from './Dialogs.module.css'
import Message, {MessageProps} from "./Message/Message";
import DialogItem, {DialogItemProps} from "./DialogItem/DialogItem";

type DialogsProps = {
    dialogs: DialogItemProps[],
    messages: MessageProps[]
}

const Dialogs = (props: any) => {
    // @ts-ignore
    let dialogElements = props.state.dialogs.map((dialog) => {
        return (
            <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
        )
    })
    // @ts-ignore
    let messageElements = props.state.messages.map(m => <Message id={m.id} message={m.message} key={m.id}/>)

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