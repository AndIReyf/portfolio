import React, {ChangeEvent} from "react";
import style from './Contact.module.scss'

type PropsType = {}

export function Contact(props: PropsType) {

    const [focus, setFocus] = React.useState(false)
    const [inpValue, setInpValue] = React.useState('')

    const focusOn = () => {
        setFocus(true)
    }
    const focusOff = () => {
        if (inpValue.trim() === ''){
            setFocus(false)
            setInpValue('')
        }
    }
    const changeInpValue = (e:ChangeEvent<HTMLInputElement>) => {
        setInpValue(e.currentTarget.value)
    }

    return (
        <section className={style.contact}>
            <h3 className={style.title}>Contact</h3>
            <div className={style.contactBox}>
                <form className={style.form} action="">
                    <div className={`${style.field} ${focus ? style.focus : ''}`}>
                        <span className={style.fieldTitle}>Name</span>
                        <input onBlur={focusOff}
                               onFocus={focusOn}
                               onChange={changeInpValue}
                               value={inpValue}
                               className={!!inpValue.trim() ? style.filled : ''}
                               type="text" required/>
                    </div>
                    <div className={style.field}>
                        <input type="text" required/>
                    </div>
                    <div className={style.field}>
                        <textarea required/>
                    </div>
                    <div className={style.btn}>
                        <button type='submit'>Send</button>
                    </div>
                </form>
            </div>
        </section>
    )
}