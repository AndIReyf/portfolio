import React from "react";
import style from './ThemeSwitcher.module.scss'
import '../fonts/font-style.css'

type PropsType = {}

export function ThemeSwitcher(props: PropsType) {

    const [checked, setChecked] = React.useState(false)

    return (
        <div className={style.switcherContainer}>
            <label className={style.switcher}>
                <span className={`${style.icon} ${checked ? `icon-moon ${style.active}` : 'icon-sun'}`}> </span>
                <input onChange={() => setChecked(checked => !checked)}
                       checked={checked}
                       type="checkbox"/>
            </label>
        </div>
    )
}