import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink
                    activeClassName={classes.active}
                    to={'./profile'}>
                    Profile
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink

                    activeClassName={classes.active}
                    to={'./dialogs'}>
                    Messages
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink
                    to={'./news'}
                    activeClassName={classes.active}>
                    News
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink
                    activeClassName={classes.active}
                    to={'./music'}>
                    Music
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink
                    activeClassName={classes.active}
                    to={'./settings'}>
                    Settings
                </NavLink>
            </div>
            <Friends/>
        </nav>
    );
};

export default Navbar;