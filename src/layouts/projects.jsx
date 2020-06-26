import React from 'react';
import classes from './projects.module.css';
import Nav from '../components/nav';
import Carousel from '../components/carousel';
import projects from '../data/projects';

const ProjectsPage = () => {
    return (
        <div className={classes.container}>
            <Nav />
            <div className={classes.title}>My <span>Projects</span></div>
            <div className={classes.carousel}>
                <Carousel
                    items={projects}
                />
            </div>

        </div>
    );
}

export default ProjectsPage;