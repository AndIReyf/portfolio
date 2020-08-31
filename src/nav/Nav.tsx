import React from "react";
import style from './Nav.module.scss'

type PropsType = {}

export function Nav(props: PropsType) {

    const list: Array<string> = ['Home', 'Skills', 'Work', 'Contacts']

    return (
        <div className={style.nav}>
            <ul className={style.list}>
                {
                    list.map((l, index) => (<li key={index}>
                        {l}
                    </li>))
                }
            </ul>
        </div>
    )
}