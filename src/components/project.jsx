import React from 'react';
import PropTypes from 'prop-types';
import classes from './project.module.css';

const Project = (props) => {
    const { name, description, languages, link, color } = props;

    return (
        <div>
            <div className={classes.container}>
                <div className={classes.project} style={{ backgroundColor: color }}>
                    <div>{name}</div>
                </div>
                <div className={classes.project_overlay}>
                    <div className={classes.description}>{description}</div>
                    <a href={link} target={"_blank"} rel="noopener noreferrer">
                        <div className={classes.btn_more}>Read more</div>
                    </a>
                    <div className={classes.tags}>
                        {languages.map((lan, i) => (
                            <div key={i} className={classes.lan_tag}>{lan}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    languages: PropTypes.array.isRequired,
    link: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Project;