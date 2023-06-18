import * as React from 'react';
import Hyperlink from './Hyperlink';
import {Icons} from "../../utils";

const HyperlinkTwinklecube = () => {
    return (
        <div style={{fontFamily: 'arial'}}>
            <Hyperlink>hyperlink</Hyperlink>
            <Hyperlink icon={Icons.SETTINGS}>hyperlink</Hyperlink>
        </div>
    );
};

export default HyperlinkTwinklecube;