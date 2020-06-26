import React from 'react';
import classes from './contact.module.css';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import Nav from '../components/nav';

const ContactPage = () => {
    return (
        <div className={classes.container}>
            <Nav />
            <div className={classes.text}>You can find me on</div>
            <div className={classes.links}>
                <a href="https://github.com/dfhdwe" target="_blank" rel="noopener noreferrer">
                    <div className={classes.link}>
                        <AiFillGithub size={70} />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/michael-wang-6b639b167/" target="_blank" rel="noopener noreferrer">
                    <div className={classes.link}>
                        <AiFillLinkedin size={70} />
                    </div>
                </a>

            </div>
            <div className={classes.text}>Or send me an <a href="mailto:mwangbox@gmail.com" target="_blank" rel="noopener noreferrer">email</a></div>
        </div>
    );
}

export default ContactPage;