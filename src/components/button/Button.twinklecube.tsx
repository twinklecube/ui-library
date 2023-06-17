import * as React from "react";
import Button from './Button';
import {ButtonType, ButtonSize} from './types';
const ButtonTwinklecube = () => {
    return (
        <div style={{fontFamily: 'arial'}}>
            <Button onClick={() => console.log('clicked')}>Default type button</Button>
            <br/>
            <br/>
            <Button buttonType={ButtonType.PRIMARY}>Primary button</Button>
            <br/>
            <br/>
            <Button buttonType={ButtonType.PRIMARY_INVERSE}>Primary less prio button</Button>
            <br/>
            <br/>
            <Button>Default size button</Button>
            <br/>
            <br/>
            <Button buttonSize={ButtonSize.SMALL}>Small button</Button>
            <br/>
            <br/>
            <Button buttonSize={ButtonSize.MEDIUM}>Medium button</Button>
            <br/>
            <br/>
            <Button buttonSize={ButtonSize.LARGE}>Large button</Button>
        </div>
    );
};

export default ButtonTwinklecube;