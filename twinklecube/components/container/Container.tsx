import * as React from 'react';
import {Routes, Route} from "react-router-dom";
import Homepage from "../homepage/Homepage";

// @ts-ignore
import style from "./style.module.css"
import FooterTwinklecube from "../../../src/components/footer/Footer.twinklecube";
import ToggleTwinklecube from "../../../src/components/toggle/Toggle.twinklecube";
import OverlayBackdropTwinklecube from '../../../src/components/overlay-backdrop/OverlayBackdrop.twinklecube';
import CookieDialogTwinklecube from '../../../src/components/cookie-dialog/CookieDialog.twinklecube';
import ButtonTwinklecube from '../../../src/components/button/Button.twinklecube';

const Container = () => {
    return (
        <div className={style.containerWrapper}>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/footer" element={<FooterTwinklecube />} />
                <Route path="/toggle" element={<ToggleTwinklecube />} />
                <Route path="/overlay-backdrop" element={<OverlayBackdropTwinklecube />} />
                <Route path="/cookie-dialog" element={<CookieDialogTwinklecube />} />
                <Route path="/button" element={<ButtonTwinklecube />} />
            </Routes>
        </div>
    );
};

export default Container;
