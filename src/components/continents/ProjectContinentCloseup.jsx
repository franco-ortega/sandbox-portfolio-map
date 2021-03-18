import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectContinentCloseup.module.css';

const ProjectContinentCloseup = ({ onContinentClick }) => {

    return (
        <div
            onClick={onContinentClick}
            className={styles.ProjectCoastlineOuterCloseup}
        >
            <div className={styles.ProjectCoastlineInnerCloseup}>
                <div className={styles.ProjectContinentCloseup}>
                    <h1>Project Closeup</h1>
                    <p className={styles.ProjectContent}>
                        Project words Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit vitae nobis tempora consequatur necessitatibus nihil quas unde nisi! Ad provident vel ea, porro a dignissimos doloremque impedit adipisci rerum.
                    </p>
                </div>
            </div>
        </div>
    )
};

ProjectContinentCloseup.propTypes = {
    onContinentClick: PropTypes.func.isRequired
};

export default ProjectContinentCloseup;
