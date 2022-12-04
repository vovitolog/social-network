import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsProps = {}

type DialogItemProps = {
    id: number,
    name: string,
}

const DialogItem = (props: DialogItemProps) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

type MessageProps = {
    message: string
}

const Message = (props: MessageProps) => {
    return (
        <div className={classes.message}>{props.message}</div>
    );
};

const Dialogs = (props: DialogsProps) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name={'John'} id={1}/>
                <DialogItem name={'Steve'} id={2}/>
                <DialogItem name={'Brady'} id={3}/>
                <DialogItem name={'Traver'} id={4}/>
                <DialogItem name={'Stacy'} id={5}/>

            </div>
            <div className={classes.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are You'}/>
                <Message message={'Bye'}/>
            </div>
        </div>
    );
};

export default Dialogs;