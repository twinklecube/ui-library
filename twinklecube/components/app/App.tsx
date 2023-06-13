import * as React from 'react';
import Header from "../header/Header";
import Body from "../body/Body";
// @ts-ignore
import style from './style.module.css'

const App = () => {
    return (
        <div className={style.appWrapper}>
            <Header />
            <Body />
        </div>
    );
};

export default App;