import React from 'react';
import useContinentToggle from '../../hooks/useContinentToggle';
// import PropTypes from 'prop-types';
import styles from './ContinentGroup.module.css';
import ResumeContinentCloseup from './ResumeContinentCloseup';

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
                    <div className={styles.ContinentGroup}>
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
