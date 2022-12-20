import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { StoreType } from './redux/state';

type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState();
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route render={() =>
                    <Profile
                        state={state.profilePage}
                        addPost={props.store.addPost.bind(props.store)}
                        updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                    />}
                       path={'/profile'}
                />
                <Route
                    render={() => <Dialogs state={state.dialogsPage}/>}
                    path={'/dialogs'}
                />
                <Route component={Music} path={'/music'}/>
                <Route component={News} path={'/news'}/>
                <Route component={Settings} path={'/settings'}/>
            </div>
        </div>
    );
}

export default App;
