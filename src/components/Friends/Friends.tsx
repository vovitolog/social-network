import React from 'react';
import classes from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = () => {
    return (
        <div >
            <h3>My Friends</h3>
            <div className={classes.friends}>
            <Friend name={'John'}/>
            <Friend name={'Ivan'}/>
            <Friend name={'Stan'}/>
            </div>
        </div>
    );
};

export default Friends;