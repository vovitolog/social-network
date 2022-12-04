import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostProps} from "./MyPosts/Post/Post";

type ProfileProps = {
    posts: PostProps[]
}

const Profile = (props: any) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    );
};

export default Profile;