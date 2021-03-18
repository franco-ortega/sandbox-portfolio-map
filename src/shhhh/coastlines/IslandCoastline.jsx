import React from 'react';
// import PropTypes from 'prop-types';
import Island from '../landmasses/Island';
import styles from './Coastline.module.css';

function IslandCoastline(props) {
    return (
        <div className={styles.Coastline}>
            <Island />
        </div>
    )
}

IslandCoastline.propTypes = {

}

export default IslandCoastline

