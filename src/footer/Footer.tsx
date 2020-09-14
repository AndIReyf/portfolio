import React from "react";
import style from './Footer.module.scss'

type PropsType = {}
type SocialLinksType = Array<LinkType>
type LinkType = {
    id: string
    name: string
    className: string
}

export function Footer(props: PropsType) {

    const socialLinks: SocialLinksType = [
        {id: '1', name: 'WhatsApp', className: 'icon-whatsapp'},
        {id: '2', name: 'Skype', className: 'icon-skype'},
        {id: '3', name: 'LinkedIn', className: 'icon-linkedin'},
        {id: '4', name: 'GitHub', className: 'icon-github'},
        {id: '5', name: 'Instagram', className: 'icon-instagram'},
        {id: '6', name: 'Telegram', className: 'icon-telegram'},
    ]
    const generateUrl = (name: string):string | undefined => {
        switch (name){
            case 'LinkedIn': {
                return 'www.linkedin.com/in/andyprudius'
            }
            case 'GitHub': {
                return 'github.com/AndIReyf'
            }
            case 'Instagram': {
                return 'www.instagram.com/reactrey/'
            }
            case 'Telegram': {
                return 't.me/andyfrontdev'
            }
            case 'WhatsApp': {
                return 'wa.me/393278538537'
            }
            case 'Skype': {
                return 'join.skype.com/invite/hvTeW0GjQhyN'
            }
        }
    }

    return (
        <footer className={style.footer}>
            <div className={style.contacts}>
                <ul className={style.list}>
                    {
                        socialLinks.map(i => <li key={i.id}>
                            <a className={style.link}
                               href={`http://${generateUrl(i.name)}`}
                               target="_blank">
                                <i className={`${style.icon} ${i.className}`}> </i>
                            </a>
                        </li>)
                    }
                </ul>
            </div>
            <div className={style.copyright}>
               <p>© 2020, All Rights Reserved.</p>
            </div>
        </footer>
    )
}