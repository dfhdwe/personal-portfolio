import React from 'react'
import PropTypes from 'prop-types';

import Project from './project';

import classes from './grid.module.css';

const colors = ["#e67e22", "#2ecc71", "#3498db", "#9b59b6", "#f1c40f", "#e74c3c"];

const Carousel = (props) => {
    const { items } = props;

    return (
        <div className={classes.wrap}>
            <div className={classes.container}>
                {items.map((item, i) => (
                    <div key={i} className={classes.project}>
                        <Project
                            name={item.name}
                            description={item.description}
                            languages={item.languages}
                            link={item.link}
                            color={colors[i % colors.length]}
                        />
                    </div>
                ))}
            </div>
        </div>

    );
}

Carousel.propTypes = {
    items: PropTypes.array.isRequired
}

export default Carousel;