import React from 'react';
// import PropTypes from 'prop-types';
import Legend from '../legends/Legend';
// import Coastline from '../../coastlines/Coastline';
import OuterCoastline from '../coastlines/OuterCoastline';
import styles from './Ocean.module.css';
// import Island from '../islands/Island';
// import IslandCoastline from '../coastlines/IslandCoastline';
import IslandOuterCoastline from '../coastlines/IslandOuterCoastline';
import { continentData } from '../continents/continentData';
import ContinentAlt from '../continents/ContinentAlt';
import BioContinent from '../continents/BioContinent';
import ProjectContinent from '../continents/ProjectContinent';
import ResumeContinent from '../continents/ResumeContinent';

const Ocean = () => {

    console.log(continentData);

    return (
        <div className={styles.Ocean}>
            <p style={{ position: 'absolute'}}>
                ~~~~~The Map to Land a Job~~~~~
            </p>
            {/* <OuterCoastline title={continentData.bio.title} />
            <OuterCoastline title={continentData.projects.title} /> */}
            <Legend />
            <IslandOuterCoastline />
            {/* <OuterCoastline title={continentData.values.title} />
            <OuterCoastline title={continentData.resume.title} />
            <OuterCoastline title={continentData.fun.title} /> */}
            <ContinentAlt />
            <BioContinent />
            <IslandOuterCoastline />
            <ProjectContinent />
            <IslandOuterCoastline />
            <ResumeContinent />
        </div>
    )
}

export default Ocean;
