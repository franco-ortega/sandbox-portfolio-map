import React from 'react';
import PropTypes from 'prop-types';
import Coastline from './Coastline';
import styles from './OuterCoastline.module.css';

const OuterCoastline = ({ title }) => {
    return (
        <div className={styles.OuterCoastline}>
            <Coastline title={title} />
        </div>
    )
}

OuterCoastline.propTypes = {
    title: PropTypes.string.isRequired
}

export default OuterCoastline;
