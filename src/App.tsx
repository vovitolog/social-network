import React from 'react';
import {BrowserRouter, Route, Router} from "react-router-dom";

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {PostProps} from "./components/Profile/MyPosts/Post/Post";
import {DialogItemProps} from "./components/Dialogs/DialogItem/DialogItem";
import {MessageProps} from "./components/Dialogs/Message/Message";

type AppProps = {
    posts: PostProps[]
    dialogs: DialogItemProps[]
    messages: MessageProps[]
}

function App(props: any) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route render={() => <Profile state={props.state.profilePage}/>}
                           path={'/profile'}
                    />
                    <Route
                        render={() => <Dialogs state={props.state.dialogsPage}/>}
                        path={'/dialogs'}
                    />
                    <Route component={Music} path={'/music'}/>
                    <Route component={News} path={'/news'}/>
                    <Route component={Settings} path={'/settings'}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
