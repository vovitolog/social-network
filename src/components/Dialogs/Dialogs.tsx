import React from 'react';
import classes from './Dialogs.module.css'

type DialogsProps = {

}

const Dialogs = (props: DialogsProps) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog + ' '+ classes.active}>Nick</div>
                <div className={classes.dialog}>Steve</div>
                <div className={classes.dialog}>Brady</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are You</div>
                <div className={classes.message}>Bye</div>
            </div>
        </div>
    );
};

export default Dialogs;