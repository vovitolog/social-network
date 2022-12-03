import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
            <img className={classes.wallpaper}
                src={'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'}/>
            </div>
            <div>Main Content</div>
            <div>
                avatar
                <img className={classes.avatar}
                     src={'https://cdn1.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.jpg'}/>
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;