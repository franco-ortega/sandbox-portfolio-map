import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Legend.module.css';

const Legend = () => {
    return (
        <div className={styles.Legend}>
            <h2>Legend/Tech Stack</h2>
            <p>
                Languages: JavaScript, SQL, HTML, CSS
            </p>
            <p>
                Front End: React, Redux
            </p>
            <p>
                Back End: Node, Express
            </p>
            <p>
                Databases: PostgreSQL
            </p>
            <p>
                Testing: Jest, QUnit, Supertest
            </p>
            <p>
                Tools: Git, GitHub, Heroku, Miro, Netlify, pgAdmin, Postman, Slack, VSCode, Whimsical, Zoom
            </p>
        </div>
    )
}

// Legend.propTypes = {

// }

export default Legend;

