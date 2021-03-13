import React from 'react';
import Continent from '../components/continents/Continent';
import styles from './Coastline.module.css';

const Coastline = () => {
    return (
        <div className={styles.Coastline}>
            <Continent />
        </div>
    )
}

export default Coastline;
