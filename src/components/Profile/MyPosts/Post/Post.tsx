import React from 'react';
import classes from './Post.module.css'

export type PostProps = {
    id: number,
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