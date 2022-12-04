import React from 'react';
import classes from './MyPosts.module.css'
import Post, {PostProps} from "./Post/Post";

type MyPostsProps = {
    posts: PostProps[];
}

const MyPosts = (props: MyPostsProps) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} key={p.id}/>)

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                New post
                <div><textarea></textarea></div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPosts;