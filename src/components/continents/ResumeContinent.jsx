import React from 'react';
// import useContinentToggle from '../../hooks/useContinentToggle';
// import ResumeContinentCloseup from './ResumeContinentCloseup';
import resume from '../../assets/Franco_Ortega_Resume.pdf';
import styles from './ResumeContinent.module.css';

const ResumeContinent = () => {
    // const { isActive, onContinentClick } = useContinentToggle();

    return (
        <div className={styles.ContinentContainer}>
            <a
                            href={resume}
                            rel="noreferrer"
                            target="_blank"
                            className={styles.ResumeLink}
                        >
            <div
                // onClick={onContinentClick}
                className={styles.CoastlineOuter}
            >
                <div className={styles.CoastlineInner}>
                    <div className={styles.ResumeContinent}>
                        
                            <h1>Resume</h1>
                    </div>
                </div>

            </div>
            </a>

            {/* {isActive
            ? <ResumeContinentCloseup
                onContinentClick={onContinentClick}
            />
            : <div
                onClick={onContinentClick}
                className={styles.CoastlineOuter}
            >
                <div className={styles.CoastlineInner}>
                    <div className={styles.ResumeContinent}>
                        <h1>Resume</h1>
                    </div>
                </div>
            </div>
            } */}
            
        </div>
    )
}


export default ResumeContinent;
