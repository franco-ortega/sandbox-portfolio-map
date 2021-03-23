import React from 'react';
import useContinentToggle from '../../hooks/useContinentToggle';
import BioContinentCloseup from './BioContinentCloseup';
import styles from './BioContinent.module.css';

const BioContinent = () => {
    const { isActive, onContinentClick } = useContinentToggle();

    return (
        <div className={styles.ContinentContainer}>

            {isActive
            ? <BioContinentCloseup
                onContinentClick={onContinentClick}
            />
            : <div
                onClick={onContinentClick}
                className={styles.CoastlineOuter}
            >
                <div className={styles.CoastlineInner}>
                    <div className={styles.BioContinent}>
                        <h1>Bio</h1>
                    </div>
                </div>
            </div>
            }
            
        </div>
    )
}

export default BioContinent
