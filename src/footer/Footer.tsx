import React from "react";
import style from './Footer.module.scss'
import skype from '../img/skype.svg'
import viber from '../img/viber.svg'
import whatsapp from '../img/whatsapp.svg'
import telegram from '../img/telegram.svg'

type PropsType = {}

export function Footer(props: PropsType) {
    return (
        <footer className={style.footer}>
            <div className={style.contacts}>
                <ul className={style.list}>
                    <li><img src={skype} alt="skype"/></li>
                    <li><img src={viber} alt="viber"/></li>
                    <li><img src={whatsapp} alt="whatsapp"/></li>
                    <li><img src={telegram} alt="telegram"/></li>
                </ul>
            </div>
            <div className={style.copyright}>
                © 2020, All Rights Reserved.
            </div>
        </footer>
    )
}