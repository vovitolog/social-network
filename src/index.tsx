import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PostProps} from "./components/Profile/MyPosts/Post/Post";
import {DialogItemProps} from "./components/Dialogs/DialogItem/DialogItem";
import {MessageProps} from "./components/Dialogs/Message/Message";

let posts: PostProps[] = [
    {id: 1, message: 'Hi, bro'},
    {id: 2, message: 'How are you?  '},
]

let dialogs: DialogItemProps[] = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Steve'},
    {id: 3, name: 'Brady'},
    {id: 4, name: 'Traver'},
    {id: 5, name: 'Stacy'},
]

let messages: MessageProps[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are You'},
    {id: 3, message: 'Bye'},
]


ReactDOM.render(
    <App
        posts={posts}
        dialogs={dialogs}
        messages={messages}
    />,
  document.getElementById('root')
);