import React from 'react';
// import PropTypes from 'prop-types';
import IslandCoastline from './IslandCoastline';
import styles from './OuterCoastline.module.css';
import styles2 from './IslandOuterCoastline.module.css';

const IslandOuterCoastline = (props) => {
    return (
        <div className={`${styles.OuterCoastline} ${styles2.IslandOuterCoastline}`}>
            <IslandCoastline />
        </div>
    )
}

IslandOuterCoastline.propTypes = {

}

export default IslandOuterCoastline;

