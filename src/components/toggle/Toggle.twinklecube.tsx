import React, {useState} from "react";
import Toggle from "./Toggle";

const ToggleTwinklecube = () => {
    const [isChecked, setIsChecked] = useState(false);
    
    const handleClick = () => {
        setIsChecked(prevState => !prevState);
    }
    
    return (
        <>
            <Toggle
                id='1'
                enabled={isChecked}
                onClick={handleClick}
            />
            <div>{isChecked ? 'checked' : 'un-checked'}</div>
        </>
    );
};

export default ToggleTwinklecube;