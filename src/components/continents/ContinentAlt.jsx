import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from './ContinentAlt.module.css';
import ContinentCloseup from './ContinentCloseup';

const ContinentAlt = props => {

    const [isActive, setIsActive] = useState(true);

    const onContinentClick = () => {
        console.log('Continent was clicked!');
        setIsActive(!isActive);
    }

    return (
        <div>
            <ContinentCloseup
                isActive={isActive}
                setIsActive={setIsActive}
            />
            <div
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
        </div>
    )
}

ContinentAlt.propTypes = {

}

export default ContinentAlt
