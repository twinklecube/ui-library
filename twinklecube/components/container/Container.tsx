import * as React from 'react';
import {Routes, Route} from "react-router-dom";
import Homepage from "../homepage/Homepage";

// @ts-ignore
import style from "./style.module.css"
import FooterTwinklecube from "../../../src/components/footer/Footer.twinklecube";

const Container = () => {
    return (
        <div className={style.containerWrapper}>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/footer" element={<FooterTwinklecube />} />
            </Routes>
        </div>
    );
};

export default Container;