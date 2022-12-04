import React from 'react';
import classes from './Friend.module.css'

const Friend = (props: any) => {
    return (
        <div className={classes.friend}>
            {props.name}
        </div>
    );
};

export default Friend;