import React from 'react';
import Legend from '../legends/Legend';
import BioContinent from '../continents/BioContinent';
import ProjectContinent from '../continents/ProjectContinent';
import ResumeContinent from '../continents/ResumeContinent';
import GitHubIsland from '../islands/GitHubIsland';
import LinkedInIsland from '../islands/LinkedInIsland';
import ArtworkIsland from '../islands/ArtworkIsland';
import Compass from '../compass/Compass';
import styles from './Ocean.module.css';

const Ocean = () => {

    return (
        <div className={styles.Ocean}>
            <div className={styles.Name}>
                Franco Ortega
            </div>
            <GitHubIsland />
            <BioContinent />
            <LinkedInIsland />
            <Legend />
            <ProjectContinent />
            <ResumeContinent />
            <ArtworkIsland />
            <Compass />
        </div>
    );
};

export default Ocean;
