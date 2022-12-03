import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.posts}>
            My posts
            <div>
                New post
            </div>
            <Post message={'Hi? bro'}/>
            <Post message={'Hoe are you?'}/>
        </div>
    );
};

export default MyPosts;