import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ContinentGroup.module.css';

const ResumeContinent = props => {
    return (
        <div className={styles.ContinentContainer}>
            <div className={styles.CoastlineOuter}>
                <div className={styles.CoastlineInner}>
                    <div className={styles.ContinentGroup}>
                        <h1>Resume</h1>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

ResumeContinent.propTypes = {

}

export default ResumeContinent
