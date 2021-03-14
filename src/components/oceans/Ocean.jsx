import React from 'react';
import Legend from '../legends/Legend';
// import Coastline from '../../coastlines/Coastline';
import OuterCoastline from '../coastlines/OuterCoastline';
import styles from './Ocean.module.css';
import Island from '../islands/Island';

const Ocean = () => {
    return (
        <div className={styles.Ocean}>
            <p style={{ position: 'absolute'}}>
                ~~~~~The Map to Land a Job~~~~~
            </p>
            <OuterCoastline />
            <OuterCoastline />
            <Island />
            <Legend />
            <OuterCoastline />
            <OuterCoastline />
            <OuterCoastline />
        </div>
    )
}

export default Ocean;
