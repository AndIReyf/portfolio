import React from "react";
import {Nav} from "../nav/Nav";
import style from "./Header.module.scss";

type PropsType = {}

export function Header(props: PropsType) {
    return (
        <header className={style.header}>
            <Nav/>
        </header>
    )
}