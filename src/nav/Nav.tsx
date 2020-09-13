import React from "react";
import style from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import '../fonts/font-style.css'

type PropsType = {}

export function Nav(props: PropsType) {

    const list: Array<string> = ['Home', 'Skills', 'Work', 'Contacts']
    const [menu, setMenu] = React.useState(false)
    const toggleMenu = () => setMenu(menu => !menu)
    React.useEffect(() => {
        // @ts-ignore
        menu ? document.querySelector('body').classList.add('lock')
            // @ts-ignore
            : document.querySelector('body').classList.remove('lock')
    }, [menu])

    function addLockToBody() {
        const body = document.querySelector('body')
    }

    return (
        <div className={style.nav}>
            <div className={`${style.burgerMenu} ${menu ? 'icon-close' : 'icon-list-ul'}`}
                 onClick={toggleMenu}></div>
            <ul className={`${style.list} ${menu ? style.active : ''}`}>
                {
                    list.map((l, index) => (
                        <li key={index}>
                            <NavLink to={l === 'Home' ? '/' : l.toLowerCase()}>
                                {l}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}