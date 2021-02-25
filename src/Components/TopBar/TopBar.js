import React from 'react';
import amazon from '../../Utils/amz.png';
import classes from './TopBar.module.css';

export default function TopBar() {
    return (
        <header>
            <nav className={classes.TopBar}>
                <img src={amazon} />
            </nav>
        </header>
    )
}