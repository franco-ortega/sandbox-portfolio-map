import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ContinentGroup.module.css';

const ProjectContinent = props => {
    return (
        <div className={styles.ContinentContainer}>
            <div className={styles.CoastlineOuter}>
                <div className={styles.CoastlineInner}>
                    <div className={styles.ContinentGroup}>
                        <h1>Team Projects</h1>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

ProjectContinent.propTypes = {

}

export default ProjectContinent
