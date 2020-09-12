import React from "react";
import style from './Nav.module.scss'
import {NavLink} from "react-router-dom";

type PropsType = {}

export function Nav(props: PropsType) {

    const list: Array<string> = ['Portfolio', 'Skills', 'Work', 'Contacts']

    return (
        <div className={style.nav}>
            <ul className={style.list}>
                {
                    list.map((l, index) => (
                        <li key={index}>
                            <NavLink to={l.toLowerCase()}>
                                {l}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}