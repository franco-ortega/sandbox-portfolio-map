import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Island.module.css';

const Island = props => {
    return (
        <div className={styles.IslandContainer}>
            <div className={styles.CoastlineOuter}>
                <div className={styles.CoastlineInner}>
                    <div className={styles.Island}>
                        <p className={styles.IslandTitle}>
                        <a href="https://www.instagram.com/reefwoodcartography/" target="_black">Cartography</a>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

Island.propTypes = {

}

export default Island
