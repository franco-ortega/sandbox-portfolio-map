import React from 'react';
import PropTypes from 'prop-types';
import Continent from '../continents/Continent';
import styles from './Coastline.module.css';

const Coastline = ({ title }) => {
    return (
        <div className={styles.Coastline}>
            <Continent title={title} />
        </div>
    )
}

Coastline.propTypes = {
    title: PropTypes.string.isRequired
}


export default Coastline;
