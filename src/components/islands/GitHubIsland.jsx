import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Island.module.css';

const GitHubIsland = props => {
    return (
        <div className={styles.IslandContainer}>
            <div className={styles.CoastlineOuter}>
                <div className={styles.CoastlineInner}>
                    <div className={styles.Island}>
                        <p className={styles.IslandTitle}>
                            <a href="https://github.com/franco-ortega" target="_black">GitHub</a>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

GitHubIsland.propTypes = {

}

export default GitHubIsland
