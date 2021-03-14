import React from 'react';
import Coastline from './Coastline';
import styles from './OuterCoastline.module.css'

const OuterCoastline = () => {
    return (
        <div className={styles.OuterCoastline}>
            <Coastline />
        </div>
    )
}

export default OuterCoastline;
