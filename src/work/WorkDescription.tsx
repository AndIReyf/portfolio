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
        },
        {id: 3, title: 'Title 3', description: 'Description 3', imgUrl: w1}
    ]

    return (
        <>
            {
                works.map(w => (
                    <div key={w.id} className={style.workDescription}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className={style.workImg}>
                            <img src={w.imgUrl} alt={w.title}/>
                        </div>
                        <div className={style.workInfo}>
                            <h3 className={style.title}>{w.title}</h3>
                            <p className={style.description}>{w.description}</p>
                        </div>
                        <a href="/">Demo</a>
                    </div>
                ))
            }
        </>
    )
}