import React, {ChangeEvent, useRef} from 'react';
import classes from './MyPosts.module.css'
import Post, {PostProps} from "./Post/Post";

type MyPostsProps = {
    posts: PostProps[];
    addPost: (newPost: string) => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

const MyPosts: React.FC<MyPostsProps> = (props) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} key={p.id}/>)

    //const inputText = React.createRef<HTMLTextAreaElement>();
    const inputText = useRef<HTMLTextAreaElement>(null);

    const addPostHandler = () => {
        props.addPost(props.newPostText)
        props.updateNewPostText('')
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                New post
                <div><textarea
                    ref={inputText}
                    value={props.newPostText}
                    onChange={onPostChange}
                />
                </div>
                <div>
                    <button onClick={addPostHandler}>Add Post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPosts;