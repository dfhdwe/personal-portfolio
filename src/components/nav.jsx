import React from 'react';
import classes from './nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <nav className={classes.container}>
            <Link to="/" className={classes.link}>
                <div className={classes.logo}>
                    Michael S. Wang
                </div>
            </Link>

            <ul className={classes.links}>
                <li><Link to="/about" className={classes.link}>About</Link></li>
                <li><Link to="/projects" className={classes.link}>Projects</Link></li>
                <li><Link to="/contact" className={classes.link}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;