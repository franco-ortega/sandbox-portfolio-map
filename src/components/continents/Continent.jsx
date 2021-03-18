import React from 'react';
import useContinentToggle from '../../hooks/useContinentToggle';
import ContinentCloseup from './ContinentCloseup';
import styles from './Continent.module.css';

const Continent = props => {
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
            >
                <div className={styles.CoastlineInner}>
                    <div className={styles.Continent}>
                        <h1>Continent</h1>
                    </div>
                </div>
            </div>
            }

        </div>
    )
}

export default Continent
