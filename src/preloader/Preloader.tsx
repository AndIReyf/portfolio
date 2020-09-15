import React from "react";
import style from './Preloader.module.scss'

export function Preloader() {
    return (
        <div className={style.preloader}>
            <h1 className={style.preloaderTitle}>
                <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
            </h1>
        </div>
    )
}