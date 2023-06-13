import * as React from 'react';
import SideNav from "../side-nav/SideNav";
import Container from "../container/Container";
// @ts-ignore
import style from "./style.module.css"

const Body = () => {
    return (
        <div className={style.bodyWrapper}>
            <SideNav />
            <Container />
        </div>
    );
};

export default Body;