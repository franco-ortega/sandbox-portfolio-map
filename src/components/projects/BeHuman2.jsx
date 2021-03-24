import React from 'react';
// import PropTypes from 'prop-types';
import beHumanImg from '../../assets/beHuman_quarterSize.png';
import styles from './BeHuman2.module.css';

const BeHuman2 = props => {
    return (
        <div className={styles.BeHuman2}>
            <p className={styles.ProjectBox}>
                VSCode extension that prompts users to take breaks with an hourly pop-up that provides wellness tips and movement videos. Users may adjust the time increment and reset the timer. My efforts included sandboxing to develop the initial time tracking functionality and pop-ups; making a model with endpoints and testing; building an admin website to update the database and invite new admins.
            </p>

                <img src={beHumanImg} alt="beHuman icon"
                        className={styles.beHumanImage}
                />

            <p className={styles.ProjectLinks}>


                <p>
                    <a href="https://marketplace.visualstudio.com/items?itemName=not-bot.be-human" rel="noreferrer" target="_blank">Extension</a>
                </p>
                
                <p>
                    
                </p>
                
                <p>
                    <a href="https://github.com/alchemy-be-human" rel="noreferrer" target="_blank">GitHub</a>
                </p>
            </p>
            
        </div>
    );
};

// BeHuman2.propTypes = {

// }

export default BeHuman2;
