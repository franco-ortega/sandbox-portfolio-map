import { useState } from 'react';

const useProjectToggle = () => {
    const [isProjectActive, setIsProjectActive] = useState();

    const onProjectClick = () => {
        console.log('Project was clicked.')
        setIsProjectActive(!isProjectActive);
    };

    return {
        isProjectActive,
        onProjectClick
    };
};

export default useProjectToggle;
