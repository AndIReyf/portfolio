import React from "react";
import style from './ContactForm.module.scss'
import {Button} from "@material-ui/core";
import {Input} from "./input/Input";

export function ContactForm() {

    const [nameValue, setNameValue] = React.useState('');
    const [emailValue, setEmailValue] = React.useState('');
    const [messageValue, setMessageValue] = React.useState('');
    const [nameError, setNameError] = React.useState(false)
    const [mailError, setMailError] = React.useState(false)

    const handleNameChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setNameValue(e.currentTarget.value);
        setNameError(false)
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setEmailValue(e.currentTarget.value)
    }
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setMessageValue(e.currentTarget.value)
    }
    const isNameError = () => nameValue.trim().length <= 2;
    const isMailError = () => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailValue)
    const getNameError = () => setNameError(isNameError())
    const getEmailError = () => setMailError(isMailError())

    return (
        <form action="" className={style.form}>
            <Input label={'Name'}
                   error={nameError}
                   textError={'Incorrect Name'}
                   helperText="Name should be more then 2 character"
                   variant={"outlined"}
                   value={nameValue}
                   onBlur={getNameError}
                   onChange={handleNameChange}/>
            <Input value={emailValue}
                   textError={'Incorrect E-mail'}
                   helperText="Enter correct e-mail"
                   error={mailError}
                   onBlur={getEmailError}
                   onChange={handleEmailChange}
                   label="E-mail"
                   variant="outlined"/>
            <Input label="Your Message"
                   variant="outlined"
                   multiline
                   value={messageValue}
                   onChange={handleMessageChange}/>
            <Button type={"submit"} variant="outlined" color="primary">Send</Button>
        </form>
    )
}