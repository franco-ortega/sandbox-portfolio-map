import { useState } from 'react';

const useContinentToggle = () => {
    const [isActive, setIsActive] = useState(false);

    const onContinentClick = () => {
        console.log('Continent was clicked!');
        setIsActive(!isActive);
    };

    return {
        isActive,
        onContinentClick
    };
};

export default useContinentToggle;
