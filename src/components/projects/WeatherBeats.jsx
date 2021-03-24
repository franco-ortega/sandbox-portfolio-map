import React from 'react';
// import PropTypes from 'prop-types'
import styles from './WeatherBeats.module.css';

const weatherBeats = () => {
    return (
        <div className={styles.WeatherBeats}>
            <h2>WeatherBeats</h2>
            (option #1)
            <p className={styles.ProjectBox}>
                React | CSS | Node | Express | WeatherBit API | Spotify API | Heroku | Netlify
            </p>
            <p className={styles.ProjectBox}>
                WeatherBeats provides a music playlist based on the weather. Users may customize their experience by selecting a preferred location, weather, or genre. Completed in a 10-day remote sprint with a 5-member team. My contributions included the acquisition of location data and associated fetch requests; creating a responsive design and consistent layout; building data files incorporated with props to enhance modularity and scalability; refactoring repetitive code.
            </p>

            <div className={styles.ProjectBox}>
                <a href="https://weatherbeats.netlify.app/" rel="noreferrer" target="_blank">Website</a> |
                | <a href="https://github.com/WeatherBeats" rel="noreferrer" target="_blank">GitHub</a>
            </div>
        </div>
    );
};

// weatherBeats.propTypes = {

// };

export default weatherBeats;

