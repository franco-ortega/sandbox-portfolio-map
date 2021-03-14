import React from 'react';
import PropTypes from 'prop-types';
import styles from './Continent.module.css';

const Continent = ({ title }) => {
    return (
        <div className={styles.Continent}>
            <h1>{title}</h1>
        </div>
    )
};

Continent.propTypes = {
    title: PropTypes.string.isRequired
};

export default Continent;
