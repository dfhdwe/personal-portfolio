import React from 'react';
import classes from './index.module.css';
import Nav from '../components/nav';

/**
 * Index page
 * @param {} IndexPage
 */

const IndexPage = () => {
    return (
        <div className={classes.container}>
            <Nav />
            <div className={classes.title_outer}>
                <div className={classes.title}>Hello World</div>
            </div>
        </div>
    );
}

export default IndexPage;