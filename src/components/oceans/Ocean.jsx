import React from 'react';
// import Coastline from '../../coastlines/Coastline';
import OuterCoastline from '../../coastlines/OuterCoastline';
import styles from './Ocean.module.css';

const Ocean = () => {
    return (
        <div className={styles.Ocean}>
            <p style={{ position: 'absolute'}}>
                ~~~~~The Map to Land a Job~~~~~
            </p>
            <OuterCoastline />
            <OuterCoastline />
            <OuterCoastline />
            <OuterCoastline />
            <OuterCoastline />
        </div>
    )
}

export default Ocean;
