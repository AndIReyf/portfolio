import React from "react";
import style from './Contact.module.scss'
import {ContactForm} from "./form/ContactForm";

type PropsType = {}

export function Contact(props: PropsType) {
    return (
        <section className={style.contact}>
            <h3 className={style.title}>Contact</h3>
            <div className={style.contactBox}>
                <ContactForm/>
            </div>
        </section>
    )
}