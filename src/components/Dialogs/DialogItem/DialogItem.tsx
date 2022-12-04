import React from 'react';
import classes from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemProps = {
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


export default DialogItem;