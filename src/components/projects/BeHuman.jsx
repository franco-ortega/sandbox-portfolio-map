import React from 'react'
import PropTypes from 'prop-types'
import styles from './BeHuman.module.css';
import BeHumanDetails from './BeHumanDetails';
import useProjectToggle from '../../hooks/useProjectToggle';

const BeHuman = () => {
    const { isProjectActive, onProjectClick } = useProjectToggle();

    if(isProjectActive) {
        return <BeHumanDetails onProjectClick={onProjectClick} />
    } else {

    return (
        <div className={styles.BeHuman}>
            <p className={styles.ProjectBox}>
                beHuman is a VSCode extension that prompts users to take breaks with an hourly pop-up that provides wellness tips and movement videos.
            </p>
            <p className={styles.ProjectBox}>
                <button onClick={onProjectClick}>
                    Click for more.
                </button>
            </p>
            {/* {isProjectActive 
            ? <BeHumanDetails onProjectClick={onProjectClick} /> 
            : <span></span>
            } */}
        </div>
    );}
}

BeHuman.propTypes = {
    onProjectClick: PropTypes.func.isRequired
}

export default BeHuman;
