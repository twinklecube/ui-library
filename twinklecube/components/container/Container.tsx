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
import HyperlinkTwinklecube from '../../../src/components/hyperlink/Hyperlink.twinklecube';
import IconTwinklecube from "../../../src/components/icon/Icon.twinklecube";
import CookieSettingItemTwinklecube from "../../../src/components/cookie-setting-item/CookieSettingItem.twinklecube";
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
                <Route path="/hyperlink" element={<HyperlinkTwinklecube />} />
                <Route path="/icon" element={<IconTwinklecube />} />
                <Route path="/cookie-setting-item" element={<CookieSettingItemTwinklecube />} />
            </Routes>
        </div>
    );
};

export default Container;
