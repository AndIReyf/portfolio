import React from "react";
import style from './Work.module.scss'
import {WorkDescription} from "./WorkDescription";

type PropsType = {}

export function Work(props: PropsType) {
    return (
        <section className={style.work}>
            <h3 className={style.workTitle}>My Work</h3>
            <div className={style.workGallery}>
                <WorkDescription/>
            </div>
        </section>
    )
}