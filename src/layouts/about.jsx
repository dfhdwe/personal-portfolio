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
                Hey, nice to meet you
            </div>
            <div className={classes.text}>
                <div className={classes.text_left}>
                    I'm <span>Michael</span>, <br />
                    a junior <span>computer science</span><br />
                    and <span>mathematics</span> student at<br />
                    the University of Maryland, College Park.
                </div>
                <div className={classes.text_right}>
                    To me, coding is a lot of fun.<br />
                    <span>Collaborating</span> with others<br />
                    to <span>create</span> things and<br />
                    <span>solve</span> problems had always<br />
                    been a journey on its own.
                </div>

                <div className={classes.text_left}>
                    Of course, computer science <br />
                    is a big field, and I am<br />
                    particularly interested in<br />
                    <span>machine learning</span><br />
                    and <span>web development</span>.
                </div>
            </div>

        </div>
    );
}

export default AboutPage;