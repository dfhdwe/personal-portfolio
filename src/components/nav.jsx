import React, { useState, useEffect } from 'react';
import classes from './nav.module.css';
import { Link } from 'react-router-dom';
import { BsList } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

function useWindowSize() {
    const isWindowClient = typeof window === "object";

    const [windowSize, setWindowSize] = useState(
        isWindowClient ? window.innerWidth : undefined
    );

    //👇
    useEffect(() => {
        //a handler which will be called on change of the screen resize
        function setSize() {
            setWindowSize(window.innerWidth);
        }

        if (isWindowClient) {
            //register the window resize listener
            window.addEventListener("resize", setSize);

            //un-register the listener
            return () => window.removeEventListener("resize", setSize);
        }
    }, [isWindowClient, setWindowSize]);
    //☝️

    return windowSize;
}

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const windowSize = useWindowSize();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    useEffect(() => {
        if (windowSize > 590 && isOpen) {
            setIsOpen(false);
        }
    }, [windowSize]);

    return (
        <nav className={isOpen ? classes.container_open : classes.container}>
            <div
                className={classes.icon}
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <AiOutlineClose size={50} color="#999" /> : <BsList size={50} />}
            </div>
            <Link to="/" className={classes.link}>
                <div className={classes.logo}>
                    Michael S. Wang
                </div>
            </Link>

            <ul className={isOpen ? classes.links_open : classes.links}>
                {isOpen ?
                    [<li><Link className={classes.link_disabled} replace>Michael S. Wang</Link></li>,
                    <li><Link to="/" className={classes.link} replace>Home</Link></li>] :
                    <></>
                }
                <li><Link to="/about" className={classes.link} replace>About</Link></li>
                <li><Link to="/projects" className={classes.link} replace>Projects</Link></li>
                <li><Link to="/contact" className={classes.link} replace>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;