import React from 'react';
import PropTypes from 'prop-types';
import beHumanImg from '../../assets/beHuman_quarterSize.png';
import styles from './BeHumanDetails.module.css'

const BeHumanDetails = ({ onProjectClick }) => {
    return (
        <div className={styles.BeHumanDetails}>
            <h2>beHuman</h2>
            <p className={styles.ProjectBox}>
                HTML | CSS | JavaScript | Node | Express | SQL | Supertest | Heroku
            </p>
            <p>
                VSCode extension that prompts users to take breaks with an hourly pop-up that provides wellness tips and movement videos. Users may adjust the time increment and reset the timer. My efforts included sandboxing to develop the initial time tracking functionality and pop-ups; making a model with endpoints and testing; building an admin website to update the database and invite new admins.
            </p>
            <p>
                <img src={beHumanImg} alt="beHuman icon"
                    className={styles.beHumanImage}
                />
            </p>
            <p className={styles.ProjectLinks}>
                <a href="https://marketplace.visualstudio.com/items?itemName=not-bot.be-human" rel="noreferrer" target="_blank">Extension</a>
                <a href="https://github.com/alchemy-be-human" rel="noreferrer" target="_blank">GitHub</a>
            </p>
            <button
                onClick={onProjectClick}
                className={styles.ProjectButton}
            >
                X
            </button>
        </div>
    );
};

BeHumanDetails.propTypes = {
    onProjectClick: PropTypes.func.isRequired
};

export default BeHumanDetails
