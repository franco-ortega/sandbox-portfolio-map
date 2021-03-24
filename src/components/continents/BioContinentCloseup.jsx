import React from 'react';
import PropTypes from 'prop-types';
import profilePhoto from '../../assets/profilePhoto.jpg';
import styles from './BioContinentCloseup.module.css';

const BioContinentCloseup = ({ onContinentClick }) => {

    return (
        <div className={styles.BioCoastlineOuterCloseup}>
            <div className={styles.BioCoastlineInnerCloseup}>
                <div className={styles.BioContinentCloseup}>
                    <h1>Profile</h1>
                    <div className={styles.BioContainer}>
                        <p className={styles.BioContent}>
                            Compassion, communication, creativity, collaboration, and curiosity are qualities that I value dearly and strive to continuously improve. Optimism guides my efforts while realistic practicality ensures that my goals are brought to fruition. Doing work that improves the lives of others brings me great joy.
                        </p>
                        <img
                            src={profilePhoto}
                            alt="profile"
                            className={styles.BioPhoto}
                        />
                    </div>
                    <button
                        onClick={onContinentClick}
                        className={styles.BioButton}
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    );
};

BioContinentCloseup.propTypes = {
    onContinentClick: PropTypes.func.isRequired
};

export default BioContinentCloseup;
