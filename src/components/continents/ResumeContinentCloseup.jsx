import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResumeContinentCloseup.module.css';

const ResumeContinentCloseup = ({ onContinentClick }) => {

    return (
        <div className={styles.ResumeCoastlineOuterCloseup}
        >
            <div className={styles.ResumeCoastlineInnerCloseup}>
                <div className={styles.ResumeContinentCloseup}>
                    <h1>Resume Closeup</h1>
                    <p className={styles.ResumeContent}>
                        Resume words Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit vitae nobis tempora consequatur necessitatibus nihil quas unde nisi! Ad provident vel ea, porro a dignissimos doloremque impedit adipisci rerum.
                    </p>
                    <button
                        onClick={onContinentClick}
                        className={styles.ResumeButton}
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    );
};

ResumeContinentCloseup.propTypes = {
    onContinentClick: PropTypes.func.isRequired
};

export default ResumeContinentCloseup;
