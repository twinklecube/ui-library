import * as React from 'react';
// @ts-ignore
import style from "./style.module.css";
// @ts-ignore
import logo from '../../logo.png';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={style.headerWrapper}>
            <Link to="/"><img src={logo}/></Link>
        </div>
    );
};

export default Header;