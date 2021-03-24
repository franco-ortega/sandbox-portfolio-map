import React from 'react';
// import { Document, Page } from 'react-pdf';
import PropTypes from 'prop-types';
import resume from '../../assets/Franco_Ortega_Resume.pdf';
import styles from './ResumeContinentCloseup.module.css';

const ResumeContinentCloseup = ({ onContinentClick }) => {

    return (
        <div className={styles.ResumeCoastlineOuterCloseup}
        >
            <div className={styles.ResumeCoastlineInnerCloseup}>
                <div className={styles.ResumeContinentCloseup}>
                    <h1>Resume</h1>
                    <p className={styles.ResumeContent}>
                    <embed
                        src={`${resume}#zoom=100`}
                        type="application/pdf"
                        width="300%"
                        height="100%"
                    />
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
