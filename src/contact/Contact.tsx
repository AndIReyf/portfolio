import React from "react";
import style from './Contact.module.scss'

type PropsType = {}

export function Contact(props: PropsType) {
    return (
        <section className={style.contact}>
            <h3 className={style.title}>Contact</h3>
            <div className={style.contactBox}>
                <form className={style.form} action="">
                    <div className={style.field}>
                        <input type="text" placeholder={'Name'} required/>
                    </div>
                    <div className={style.field}>
                        <input type="text" placeholder={'E-mail'} required/>
                    </div>
                    <div className={style.field}>
                        <textarea placeholder={'Your message'} required/>
                    </div>
                    <div className={style.btn}>
                        <button type='submit'>Send</button>
                    </div>
                </form>
            </div>
        </section>
    )
}