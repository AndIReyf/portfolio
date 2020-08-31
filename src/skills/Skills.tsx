import React from "react";
import style from './Skills.module.scss'
import {SkillDescription} from "./SkillDescription";

type PropsType = {}

export function Skills(props: PropsType) {
    return (
        <section className={style.skills}>
            <h3 className={style.title}>Skills</h3>
            <div className={style.skillsBox}>
                <SkillDescription/>
            </div>
        </section>
    )
}