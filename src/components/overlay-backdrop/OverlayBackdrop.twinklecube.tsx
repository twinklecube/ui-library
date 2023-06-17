import React, {useState, useEffect} from 'react';
import OverlayBackdrop from './OverlayBackdrop';
import Toggle from '../toggle/Toggle';

const OverlayBackdropTwinklecube = () => {
    const [isBackdropVisible, setIsBackdropVisible] = useState(true);

    const handleClick = () => {
        setIsBackdropVisible(false);
    }

    return (
        <>
            {
                isBackdropVisible && <OverlayBackdrop onClick={handleClick}>overlay backdrop</OverlayBackdrop>
            }
        </>
    );
};

export default OverlayBackdropTwinklecube;