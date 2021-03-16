import React from 'react';
// import PropTypes from 'prop-types';
import styles from './IslandAlt.module.css';

const ContinentAlt = props => {
    return (
        <div>
            <div className={styles.CoastlineOuter}>
                <div className={styles.CoastlineInner}>
                    <div className={styles.IslandAlt}>
                        <p>Island</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

ContinentAlt.propTypes = {

}

export default ContinentAlt
