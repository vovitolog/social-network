import React, {LegacyRef, TextareaHTMLAttributes, useRef} from 'react';
import classes from './MyPosts.module.css'
import Post, {PostProps} from "./Post/Post";

type MyPostsProps = {
    posts: PostProps[];
}

const MyPosts: React.FC<MyPostsProps> = (props) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} key={p.id}/>)

    //const inputText = React.createRef<HTMLTextAreaElement>();
    const inputText = useRef<HTMLTextAreaElement>(null);

    const buttonHandler = () => {
        alert(inputText.current?.value)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                New post
                <div><textarea ref={inputText}></textarea></div>
                <div>
                    <button onClick={buttonHandler}>Add Post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPosts;