import * as React from 'react';
import {Link} from "react-router-dom";
//@ts-ignore
import style from "./style.module.css";

const SideNav = () => {
    return (
        <div className={style.sideNavWrapper}>
            <nav>
                <h4>Atoms</h4>
                    <ul>
                        <li><Link to="/toggle">toggle</Link></li>
                        <li><Link to="/button">button</Link></li>
                        <li><Link to="/overlay-backdrop">overlay backdrop</Link></li>
                    </ul>
                
                <h4>Molecules</h4>
                <ul>
                    <li><Link to="/footer">footer</Link></li>
                </ul>

                <h4>Sections</h4>
                <ul>
                    <li><Link to="/cookie-dialog">cookie dialog</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNav;
