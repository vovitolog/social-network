import React from 'react';
import classes from './MyPosts.module.css'
import Post, {PostProps} from "./Post/Post";

let posts: PostProps[] = [
    {id: 1, message: 'Hi, bro'},
    {id: 2, message: 'How are you?  '},
]

let postsElements = posts.map(p=><Post id={p.id} message={p.message} key={p.id}/>)

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
            {postsElements}
        </div>
    );
};

export default MyPosts;