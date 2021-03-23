import React from 'react';
// import PropTypes from 'prop-types'
import styles from './WeatherBeats.module.css';

const weatherBeats = props => {
    return (
        <div className={styles.WeatherBeats}>
            <p className={styles.ProjectBox}>
                WeatherBeats provides a music playlist based on the weather. Users may customize their experience by selecting a preferred location, weather, or genre. Completed in a 10-day remote sprint with a 5-member team. My contributions included the acquisition of location data and associated fetch requests; creating a responsive design and consistent layout; building data files incorporated with props to enhance modularity and scalability; refactoring repetitive code.
            </p>
            <p className={styles.ProjectBox}>
            <p>
                <a href="https://weatherbeats.netlify.app/" rel="noreferrer" target="_blank">Website</a> |
                | <a href="https://github.com/WeatherBeats" rel="noreferrer" target="_blank">GitHub</a>
            </p>
            </p>
        </div>
    )
}

weatherBeats.propTypes = {

}

export default weatherBeats