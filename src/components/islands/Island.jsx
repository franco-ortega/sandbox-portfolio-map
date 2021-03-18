import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Island.module.css';

const Island = props => {
    return (
        <div>
            <div className={styles.CoastlineOuter}>
                <div className={styles.CoastlineInner}>
                    <div className={styles.Island}>
                        <p>Island</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

Island.propTypes = {

}

export default Island
