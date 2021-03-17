import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ContinentGroup.module.css';

const ContinentAlt = props => {
    return (
        <div>
            <div className={styles.CoastlineOuter}>
                <div className={styles.CoastlineInner}>
                    <div className={styles.ContinentAlt}>
                        <h1>Bio</h1>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

ContinentAlt.propTypes = {

}

export default ContinentAlt
