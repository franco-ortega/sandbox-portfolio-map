import React from 'react';
import useContinentToggle from '../../hooks/useContinentToggle';
// import PropTypes from 'prop-types';
import ResumeContinentCloseup from './ResumeContinentCloseup';
import styles from './ResumeContinent.module.css';

const ResumeContinent = props => {

    const { isActive, onContinentClick } = useContinentToggle();

    return (
        <div className={styles.ContinentContainer}>

            {isActive
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
            }
            
        </div>
    )
}

ResumeContinent.propTypes = {

}

export default ResumeContinent
