import React from 'react';
import classes from './Post.module.css'

type PostProps = {
    message: string;
}


const Post = (props: PostProps) => {

    return (
        <div className={classes.item}>
            {props.message}
        </div>
    );
};

export default Post;