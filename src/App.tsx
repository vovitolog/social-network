import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className={'header'}>
                <img src={'https://i.pinimg.com/564x/4a/d4/9f/4ad49ffc017cb57a2ec50ecb69e40fa7.jpg'}/>
            </header>
            <nav className={'nav'}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>


            </nav>
            <div className={'content'}>
                <img
                    src={'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'}/>
                Main Content
                <div>
                    avatar
                    <img className={'avatar'}
                         src={'https://cdn1.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.jpg'}/>
                </div>
            </div>

        </div>
    );
}

export default App;
