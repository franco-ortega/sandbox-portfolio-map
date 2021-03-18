import React from 'react';
import useContinentToggle from '../../hooks/useContinentToggle';
// import PropTypes from 'prop-types';
import styles from './ContinentAlt.module.css';
import ContinentCloseup from './ContinentCloseup';

const ContinentAlt = props => {
    const { isActive, onContinentClick } = useContinentToggle();

    return (
        <div className={styles.ContinentContainer}>

            {isActive
            ? <ContinentCloseup
                onContinentClick={onContinentClick}
            />
            : <div
                onClick={onContinentClick}
                className={styles.CoastlineOuter}
                // className={isActive ? styles.CoastlineOuter : styles.CoastlineOuterCloseup}
            >
                <div
                    className={styles.CoastlineInner}
                    // className={isActive ? styles.CoastlineInner : styles.CoastlineInnerCloseup}
                >
                    <div
                        className={styles.ContinentAlt}
                        // className={isActive ? styles.ContinentAlt : styles.ContinentCloseup}
                    >
                        <h1>Continent</h1>
                    </div>
                </div>
            </div>
            }

        </div>
    )
}

ContinentAlt.propTypes = {

}

export default ContinentAlt
