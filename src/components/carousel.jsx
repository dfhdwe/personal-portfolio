import React from 'react'
import PropTypes from 'prop-types';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel-slick.css";

import Slider from 'react-slick';
import Project from './project';

const setting = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    dots: true,
}

const colors = ["#e67e22", "#2ecc71", "#3498db", "#9b59b6", "#f1c40f", "#e74c3c"];

const Carousel = (props) => {
    const { items } = props;

    return (
        <div>
            <Slider {...setting}>
                {items.map((item, i) => (
                    <Project
                        key={i}
                        name={item.name}
                        description={item.description}
                        languages={item.languages}
                        link={item.link}
                        color={colors[i % colors.length]}
                    />
                ))}
            </Slider>
        </div>

    );
}

Carousel.propTypes = {
    items: PropTypes.array.isRequired
}

export default Carousel;