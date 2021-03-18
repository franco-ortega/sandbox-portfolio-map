import React from 'react';
import Legend from '../legends/Legend';
// import Continent from '../continents/Continent';
import BioContinent from '../continents/BioContinent';
import ProjectContinent from '../continents/ProjectContinent';
import ResumeContinent from '../continents/ResumeContinent';
import Island from '../islands/Island';
import styles from './Ocean.module.css';

const Ocean = () => {

    return (
        <div className={styles.Ocean}>
            <Legend />
            {/* <Continent/> */}
            <Island />
            <BioContinent />
            <Island />
            <ProjectContinent />
            <ResumeContinent />
            <Island />
        </div>
    )
}

export default Ocean;
