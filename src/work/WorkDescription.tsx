import React from "react";
import style from './Work.module.scss'
import w1 from '../img/work1.jpg'
import w2 from '../img/work2.jpg'

type PropsType = {}

export function WorkDescription(props: PropsType) {

    const works = [
        {id: 1, title: 'Title 1', description: 'Description 1', imgUrl: w1},
        {
            id: 2,
            title: 'Title 2',
            description: 'Description 2 Description 2 Description 2 Description 2 Description 2',
            imgUrl: w2
        }
    ]

    return (
        <>
            {
                works.map(w => (
                    <div key={w.id} className={style.workDescription}>
                        <div className={style.workImg}>
                            <img src={w.imgUrl} alt={w.title}/>
                            <a href="/">Show details</a>
                        </div>
                        <div className={style.workBox}>
                            <div className={style.title}>{w.title}</div>
                            <div className={style.description}>{w.description}</div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}