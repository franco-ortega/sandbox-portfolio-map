import React from 'react';
// import PropTypes from 'prop-types';
import WeatherBeatsDetails from './WeatherBeatsDetails';
import useProjectToggle from '../../hooks/useProjectToggle';
import styles from './WeatherBeats2.module.css'

const WeatherBeats2 = () => {
    const { isProjectActive, onProjectClick} = useProjectToggle();

    if(isProjectActive) {
        return <WeatherBeatsDetails onProjectClick={onProjectClick} />
    } else {
        return (
            <div className={styles.WeatherBeats2}>
                <p className={styles.ProjectBox}>
                    WeatherBeats provides a music playlist based on the weather. Users may customize their experience by selecting a preferred location, weather, or genre.
                </p>
                <p className={styles.ProjectBox}>
                    <button onClick={onProjectClick}>
                        Click for more.
                    </button>
                </p>
                
            </div>
        );
    };
};

// WeatherBeats2.propTypes = {
//     onProjectClick: PropTypes.func.isRequired
// };

export default WeatherBeats2;
