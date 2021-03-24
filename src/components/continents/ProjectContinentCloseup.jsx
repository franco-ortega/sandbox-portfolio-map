import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectContinentCloseup.module.css';
import WeatherBeats from '../projects/WeatherBeats';
import BeHuman from '../projects/BeHuman';
import WeatherBeats2 from '../projects/WeatherBeats2';
import BeHuman2 from '../projects/BeHuman2';

const ProjectContinentCloseup = ({ onContinentClick }) => {

    return (
        <div className={styles.ProjectCoastlineOuterCloseup}
        >
            <div className={styles.ProjectCoastlineInnerCloseup}>
                <div className={styles.ProjectContinentCloseup}>
                    <h1>Team Projects</h1>
                    <p className={styles.ProjectContent}>
                        These projects were completed remotely with 3-5 member teams over 5-10 day sprints.
                    </p>

                    <div className={styles.ProjectContainer}>

                        <div className={styles.Project}>
                            <WeatherBeats />
                        </div>

                        <div className={styles.Project}>
                            <BeHuman
                            />
                        </div>

                        <div className={styles.Project}>
                            <WeatherBeats2 />
                        </div>

                        <div className={styles.Project}>
                            <BeHuman2 />
                        </div>

                        <div className={styles.Project}>PROJECT #3 - Choose GIF</div>

                        <div className={styles.Project}>PROJECT #4 - Major Arcana Divinator</div>

                    </div>

                    <button
                        onClick={onContinentClick}
                        className={styles.ProjectButton}
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    );
};

ProjectContinentCloseup.propTypes = {
    onContinentClick: PropTypes.func.isRequired
};

export default ProjectContinentCloseup;
