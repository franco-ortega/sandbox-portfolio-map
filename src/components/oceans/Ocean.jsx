import React from 'react';
import Coastline from '../../coastlines/Coastline';
import styles from './Ocean.module.css';

const Ocean = () => {
    return (
        <div className={styles.Ocean}>
            <Coastline />
            <Coastline />
            <Coastline />
            <Coastline />
            <Coastline />
        </div>
    )
}

export default Ocean;
