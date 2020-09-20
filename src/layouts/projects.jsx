import React from 'react';
import classes from './projects.module.css';
import Nav from '../components/nav';
import Grid from '../components/grid';
import projects from '../data/projects';

const ProjectsPage = () => {
    return (
        <div className={classes.container}>
            <Nav />
            <div className={classes.title}>my <span>Projects</span></div>
            <div className={classes.grid}>
                <Grid
                    items={projects}
                />
            </div>

        </div>
    );
}

export default ProjectsPage;