import React from "react";
import {Nav} from "../nav/Nav";
import style from "./Header.module.scss";
import {ThemeSwitcher} from "../theme/ThemeSwitcher";

type PropsType = {}

export function Header(props: PropsType) {
    return (
        <header className={style.header}>
            <div className={style.headerWrapper}>
                <ThemeSwitcher/>
                <Nav/>
            </div>
        </header>
    )
}