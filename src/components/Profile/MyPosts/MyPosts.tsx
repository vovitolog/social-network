import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                New post
               <div> <textarea></textarea></div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <Post message={'Hi? bro'}/>
            <Post message={'How are you?'}/>
        </div>
    );
};

export default MyPosts;