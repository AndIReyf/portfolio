import React from "react";
import style from './Skills.module.scss'
import {SkillCard} from "./SkillCard";

type PropsType = {}

export function Skills(props: PropsType) {
    return (
        <section className={style.skills}>
            <h3 className={style.title}>Skills</h3>
            <div className={style.skillsBox}>
                <SkillCard/>
            </div>
        </section>
    )
}