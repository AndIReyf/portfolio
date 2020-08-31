import React from "react";
import style from './Main.module.scss'
import avatar from '../img/avatar.jpeg'

type PropsType = {}

export function Main(props: PropsType) {
    return (
        <main className={style.main}>
            <div className={style.description}>
                <span>Hi</span>
                <h1>I am <span>Andy</span></h1>
                <p>
                   a <span>Frontend developer</span>
                </p>
            </div>
            <div className={style.avatar}>
                <img src={avatar} alt="Avatar"/>
            </div>
        </main>
    )
}