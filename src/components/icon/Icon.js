import React from 'react';
import PropTypes from 'prop-types';

const icons = {

};

const Icon = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d={icons[props.icon]}></path>
    </svg>
);

Icon.propTypes = {
     icon: PropTypes.string.isRequired,
};

export default Icon;