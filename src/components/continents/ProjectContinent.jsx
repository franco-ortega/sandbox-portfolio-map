import React from 'react';
import useContinentToggle from '../../hooks/useContinentToggle';
import ProjectContinentCloseup from './ProjectContinentCloseup';
import styles from './ProjectContinent.module.css';

const ProjectContinent = () => {
    const { isActive, onContinentClick } = useContinentToggle();

    return (
        <div className={styles.ContinentContainer}>

            {isActive
            ? <ProjectContinentCloseup
                onContinentClick={onContinentClick}
            />
            : <div
                onClick={onContinentClick}
                className={styles.CoastlineOuter}
            >
                <div className={styles.CoastlineInner}>
                    <div className={styles.ProjectContinent}>
                        <h1>Team Projects</h1>
                    </div>
                </div>
            </div>
            }

            
        </div>
    )
}

export default ProjectContinent;
