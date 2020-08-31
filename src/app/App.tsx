import React from 'react';
import style from './App.module.scss'
import {Header} from "../header/Header";
import {Main} from "../main/Main";
import {Skills} from "../skills/Skills";
import {Work} from "../work/Work";
import {Contact} from "../contact/Contact";
import {Footer} from "../footer/Footer";

export function App() {
    return (
        <div className={style.app}>
            <Header/>
            <Main/>
            <Skills/>
            <Work/>
            <Contact/>
            <Footer/>
        </div>
    );
}
