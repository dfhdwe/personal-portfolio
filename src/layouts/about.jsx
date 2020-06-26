import React from 'react'
import classes from './about.module.css';
import Nav from '../components/nav';

/**
 * Page about myself
 * @param {} AboutPage
 */

const AboutPage = () => {

    return (
        <div className={classes.container}>
            <Nav />
            <div className={classes.title}>
                Hi, my name is <span>Michael Wang</span>
            </div>
            <div className={classes.text}>
                <div className={classes.text_left}>
                    I’m a <span>computer science</span> and<br /><span>mathematics</span> student at<br />the University of Maryland, College Park.
                </div>
                <div className={classes.text_right}>
                    I like anything software development and <br />am particularly interested in<br /><span>website</span> and <span>app development</span>.
                </div>
            </div>

        </div>
    );
}

export default AboutPage;