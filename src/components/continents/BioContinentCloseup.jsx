import React from 'react';
import PropTypes from 'prop-types';
import profilePhoto from '../../assets/profilePhoto.jpg';
import styles from './BioContinentCloseup.module.css';

const BioContinentCloseup = ({ onContinentClick }) => {

    return (
        <div className={styles.BioCoastlineOuterCloseup}>
            <div className={styles.BioCoastlineInnerCloseup}>
                <div className={styles.BioContinentCloseup}>
                    <h1>Franco Ortega</h1>
                    <p>(he/him)</p>
                    <div className={styles.BioContainer}>
                        <p className={styles.BioContent}>
                            <img
                                src={profilePhoto}
                                alt="profile"
                                className={styles.BioPhoto}
                            />
                            Compassion, communication, creativity, collaboration, and curiosity are qualities that I value dearly and strive to continuously improve. Optimism guides my efforts while realistic practicality ensures that my goals are brought to fruition. Doing work that improves the lives of others brings me great joy.
                        <br/>
                        <br/>
                            Adaptability, empathy, and patience are strengths that have served me well across multiple fields from publishing to education to transportation. I have applied these to brainstorming, problem solving, and maintaining forward momentum even as circumstances change unexpectedly. Furthermore, my professional experience has put me in constant contact with people of all ages and from many walks of life. This has given me tremendous opportunity to grow as a communicator, listener, and mediator. I look forward to using these strengths and experiences to enhance my contributions as a member of a software development team for a company that values the well-being of its workers and cares about its impact.
                        <br/>
                        <br/>
                            Additionally, despite being a math and science kid, I have learned to appreciate and nurture my creative side through writing, cartography, and designing boardgames. I also enjoy bouldering, getting around on bike, and attending art events.
                        <br/>
                        <br/>
                            Yes to social justice, climate justice, and economic justice. 
                        </p>
                        
                    </div>
                    <button
                        onClick={onContinentClick}
                        className={styles.BioButton}
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    );
};

BioContinentCloseup.propTypes = {
    onContinentClick: PropTypes.func.isRequired
};

export default BioContinentCloseup;
