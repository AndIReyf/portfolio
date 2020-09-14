import React from "react";
import style from "./Skills.module.scss";
import js from '../img/logo-javascript.svg'
import react from '../img/react.svg'
import redux from '../img/redux.svg'

type PropsType = {}

export function SkillCard(props: PropsType) {

    const skills = [
        {id: 1, skill: 'JavaScript', imgUrl: js, description: 'Some txt'},
        {id: 2, skill: 'React', imgUrl: react, description: 'Some txtSome txtSome txtSome txtSome txt'},
        {id: 3, skill: 'Redux', imgUrl: redux, description: 'Some txt'}
    ]

    return (
        <>
            {
                skills.map(s => (
                    <div key={s.id} className={style.skillDescription}>
                        <div className={style.skillImg}>
                            <img src={s.imgUrl} alt={s.skill}/>
                        </div>
                        <div className={style.skillContent}>
                            <h3 className={style.skillTitle}>{s.skill}</h3>
                            <p className={style.skillText}>{s.description}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}